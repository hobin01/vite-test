import React, { useState } from 'react';

function DatasetManagePage() {
  const [textValue, setTextValue] = useState('');
  const [datasetCount, setDatasetCount] = useState(10);
  const [apiKey, setApiKey] = useState('');
  const [option, setOption] = useState('옵션1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateDataset = () => {
    const dummyMail = `From: example@test.com
To: user@test.com
Subject: Confidential Info

이 메일은 대외비입니다.`;
    setTextValue(dummyMail);
  };

  const downloadData = () => {
    const blob = new Blob([textValue], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dataset.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const regenerate = () => {
    generateDataset();
  };

  const callApiStream = async () => {
    if (!apiKey) {
      alert('API Key를 입력해주세요.');
      return;
    }

    setLoading(true);
    setError(null);
    setTextValue('');

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/dataset/stream?api_key=${apiKey}&count=${datasetCount}&option=${option}`, {
        method: 'GET'
      });

      if (!response.ok || !response.body) {
        throw new Error('API 요청 실패');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (readerDone) {
          done = true;
        } else {
          const chunk = decoder.decode(value, { stream: true });
          setTextValue(prev => prev + chunk); 
        }
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pt-[25vh] px-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
        데이터셋 관리
      </h2>
      <div className="flex space-x-4">
        <div className="w-3/4 space-y-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={generateDataset} 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              학습 데이터셋 생성(더미)
            </button>
            <button 
              onClick={callApiStream} 
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors shadow-sm"
            >
              API 스트림 호출
            </button>
          </div>
          
          {loading && <div className="text-gray-700">로딩 중...</div>}
          {error && <div className="text-red-600">{error}</div>}

          <textarea
            className="w-full h-64 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
          />

          <div className="flex space-x-4">
            <button 
              onClick={downloadData} 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              다운로드
            </button>
            <button 
              onClick={regenerate} 
              className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              재생성
            </button>
          </div>
        </div>
        <div className="w-1/4 space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">생성할 데이터셋 개수</label>
            <input
              type="number"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
              value={datasetCount}
              onChange={e => setDatasetCount(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">API Key</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">옵션 선택</label>
            <select
              className="border border-gray-300 rounded-md w-full p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetManagePage;

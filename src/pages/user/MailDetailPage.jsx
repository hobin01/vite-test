import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyConfidentialMail = `From: secret@test.com
To: partner@test.com
Subject: Confidential Deal

여기는 대외비 정보가 포함되어 있습니다. 이 내용은 외부로 유출 금지.`;
const dummyHighlight = `대외비 키워드: "대외비"
위반된 컴플라이언스: "Company Policy #123"`;

function MailDetailPage() {
  const { mailId } = useParams();
  const navigate = useNavigate();
  const [correctedMail, setCorrectedMail] = useState('여기는 대외비 정보 대신 공개 가능한 내용으로 수정했습니다.');

  useEffect(() => {
    // mailId를 기반으로 실제 데이터 fetch 가능 (현재 dummy)
  }, [mailId]);

  const confirmMail = () => {
    let detectionList = JSON.parse(localStorage.getItem('detectionList') || '[]');
    detectionList = detectionList.map(mail => {
      if (mail.id === Number(mailId)) {
        return { ...mail, checked: 'O' };
      }
      return mail;
    });
    localStorage.setItem('detectionList', JSON.stringify(detectionList));
    alert('확인 처리되었습니다.');
  };

  return (
    <div className="max-w-6xl mx-auto pt-[10vh] px-4 flex space-x-8">
      <div className="w-1/2 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">원본 메일 (ID: {mailId})</h2>
          <div className="border border-gray-300 rounded-lg p-3 h-64 overflow-auto whitespace-pre-wrap text-gray-800">
            {dummyConfidentialMail}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mt-4 text-gray-900">대외비 키워드/컴플라이언스 정보</h3>
          <div className="border border-gray-300 rounded-lg p-3 whitespace-pre-wrap text-gray-800">
            {dummyHighlight}
          </div>
        </div>
      </div>
      <div className="w-1/2 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">교정된 메일</h2>
          <textarea
            className="border border-gray-300 rounded-lg w-full h-48 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
            value={correctedMail}
            onChange={e => setCorrectedMail(e.target.value)}
          />
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={confirmMail}
            className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            확인
          </button>
          <button
            onClick={() => navigate('/user/challenge')}
            className="text-gray-700 border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            컴플라이언스 문제 도전
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailDetailPage;

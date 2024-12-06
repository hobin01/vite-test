import React, { useState } from 'react';

const dummyQuestion = {
  question: "다음 중 대외비로 처리해야 할 정보는?",
  options: [
    "공개된 회사 조직도",
    "내부 재무 보고서",
    "공식 보도자료",
    "웹사이트 공지사항"
  ],
  correctIndex: 1,
  explanation: "내부 재무 보고서는 일반적으로 대외비로 간주될 수 있습니다."
};

function ComplianceChallengePage() {
  const [score, setScore] = useState(Number(localStorage.getItem('score')||0));
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  const submitAnswer = () => {
    if (selected === null) return;
    if (selected === dummyQuestion.correctIndex) {
      setScore(prev=>prev+1);
      localStorage.setItem('score', score+1);
      setFeedback('정답! 점수가 상승했습니다.');
    } else {
      setFeedback(`오답입니다. 정답: ${dummyQuestion.options[dummyQuestion.correctIndex]}\n${dummyQuestion.explanation}`);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[20vh] px-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
        컴플라이언스 문제 도전
      </h2>
      <div className="max-w-2xl w-full space-y-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold text-gray-800">나의 점수: {score}</div>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 bg-white">
          <div className="mb-4 text-lg text-gray-900 font-medium">{dummyQuestion.question}</div>
          {dummyQuestion.options.map((opt, idx) => (
            <label key={idx} className="flex items-center mb-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="form-radio h-5 w-5 text-blue-600"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />
              <span className="ml-2 text-gray-800">{opt}</span>
            </label>
          ))}
        </div>
        {feedback && <div className="text-red-600 whitespace-pre-wrap">{feedback}</div>}
        <div className="flex justify-end">
          <button 
            onClick={submitAnswer} 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComplianceChallengePage;

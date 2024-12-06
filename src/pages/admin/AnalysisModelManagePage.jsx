import React from 'react';

function AnalysisModelManagePage() {
  return (
    <div className="flex flex-col items-center pt-[25vh] text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
        분석 모델 관리
      </h2>
      <div className="flex flex-col items-center space-y-6">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-sm">분석 모델 학습</button>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-sm">모델 수정</button>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-sm">모델 삭제</button>
      </div>
    </div>
  );
}

export default AnalysisModelManagePage;

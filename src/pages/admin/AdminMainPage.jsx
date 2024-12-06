import React from 'react';
import { Link } from 'react-router-dom';

function AdminMainPage() {
  return (
    <div className="flex flex-col items-center pt-[25vh] text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
        관리자 메인 페이지
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        데이터를 효율적으로 관리하고 분석 모델을 제어하세요.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <Link 
          to="/admin/datasets" 
          className="text-gray-900 bg-gray-100 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors shadow-sm"
        >
          데이터셋 관리
        </Link>
        <Link 
          to="/admin/analysis-models" 
          className="text-gray-900 bg-gray-100 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors shadow-sm"
        >
          분석 모델 관리
        </Link>
      </div>
    </div>
  );
}

export default AdminMainPage;

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-gray-50">
        <Link to="/admin" className="font-extrabold text-xl text-gray-900 hover:text-blue-600 transition-colors">
          Admin Portal
        </Link>
        <div className="flex items-center space-x-8 text-lg">
          <Link to="/admin/datasets" className="text-gray-700 hover:text-blue-600 transition-colors">
            데이터셋 관리
          </Link>
          <Link to="/admin/analysis-models" className="text-gray-700 hover:text-blue-600 transition-colors">
            분석 모델 관리
          </Link>
          <button className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
            로그인
          </button>
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;

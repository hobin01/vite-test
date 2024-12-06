import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function getInitialData() {
  let data = JSON.parse(localStorage.getItem('detectionList') || '[]');

  // 데이터가 비어있거나, 첫 번째 아이템에 id 필드가 없는 경우 재설정
  if (data.length === 0 || data[0].id === undefined) {
    data = [
      { id: 1, title: "Confidential Deal Mail", checked: "X" },
      { id: 2, title: "Internal Report", checked: "O" },
      { id: 3, title: "Secret Partnership Mail", checked: "X" },
    ];
    localStorage.setItem('detectionList', JSON.stringify(data));
  }

  return data;
}

function DetectionListPage() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(getInitialData());
  }, []);

  const rowClick = (mail) => {
    navigate(`/user/${mail.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto pt-[25vh] px-4">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
        탐지 리스트
      </h2>
      <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold text-sm">ID</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold text-sm">메일 제목</th>
              <th className="py-3 px-4 text-center text-gray-700 font-semibold text-sm">확인 유무</th>
            </tr>
          </thead>
          <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-gray-200">
            {list.map((mail, idx) => (
              <tr 
                key={idx} 
                onClick={() => rowClick(mail)} 
                className="cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-gray-800">{mail.id}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{mail.title}</td>
                <td className="py-3 px-4 text-center text-sm text-gray-800">{mail.checked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetectionListPage;

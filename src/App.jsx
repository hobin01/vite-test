import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import AdminMainPage from './pages/admin/AdminMainPage';
import DatasetManagePage from './pages/admin/DatasetManagePage';
import AnalysisModelManagePage from './pages/admin/AnalysisModelManagePage';
import UserMainPage from './pages/user/UserMainPage';
import ComplianceChallengePage from './pages/user/ComplianceChallengePage';
import DetectionListPage from './pages/user/DetectionListPage';
import MailDetailPage from './pages/user/MailDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user" replace />} />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="" element={<AdminMainPage />} />
        <Route path="datasets" element={<DatasetManagePage />} />
        <Route path="analysis-models" element={<AnalysisModelManagePage />} />
      </Route>

      {/* User Routes */}
      <Route path="/user/*" element={<UserLayout />}>
        <Route path="" element={<UserMainPage />} />
        <Route path="challenge" element={<ComplianceChallengePage />} />
        <Route path="list" element={<DetectionListPage />} />
        <Route path=":mailId" element={<MailDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;

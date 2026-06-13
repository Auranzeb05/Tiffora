import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/auth/Login';
import CustomerDashboard from '../pages/customer/Dashboard';
import AdminAnalyticsHub from '../pages/admin/AnalyticsHub';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRoles={['customer']}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminAnalyticsHub />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/customer/dashboard" replace />} />
    </Routes>
  );
}

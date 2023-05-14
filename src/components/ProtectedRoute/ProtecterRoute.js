import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isLoading }) {
  return isLoading ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
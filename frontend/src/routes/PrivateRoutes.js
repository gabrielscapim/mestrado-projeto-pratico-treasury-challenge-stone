import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
  const token = localStorage.getItem('token');

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  );
}

export default PrivateRoutes;

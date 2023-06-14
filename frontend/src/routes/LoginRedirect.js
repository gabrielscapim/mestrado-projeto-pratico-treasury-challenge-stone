import { Outlet, Navigate } from 'react-router-dom';

function LoginRedirect() {
  const token = localStorage.getItem('token');

  return (
    token ? <Navigate to="/generate-codes" /> : <Outlet />
  );
}

export default LoginRedirect;

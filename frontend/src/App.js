import LoginPage from '../src/pages/LoginPage';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoutes from './routes/PrivateRoutes';
import GenerateCodesPage from './pages/GenerateCodesPage';
import LoginRedirect from './routes/LoginRedirect';

function App() {
  const dateNow = Date.now();
  const tokenGenerationTime = localStorage.getItem('tokenGenerationTime');
  const TOKEN_EXPIRATION_TIME = 28800000;

  if (tokenGenerationTime && (dateNow - tokenGenerationTime > TOKEN_EXPIRATION_TIME)) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenGenerationTime');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <LoginRedirect /> }>
          <Route path="*" element={ <Navigate to="login" replace /> } />
          <Route exact path="/login" Component={ LoginPage } />
        </Route>
        <Route element={ <PrivateRoutes /> }>
          <Route exact path="/generate-codes" Component={ GenerateCodesPage } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

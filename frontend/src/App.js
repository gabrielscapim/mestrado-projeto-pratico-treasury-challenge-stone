import LoginPage from '../src/pages/LoginPage';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
        <Route path="*" element={ <Navigate to="login" replace /> } />
        <Route exact path="/login" Component={ LoginPage } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import LoginPage from '../src/pages/LoginPage';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
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

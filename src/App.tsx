import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import PacientHome from './pages/pacientHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<Registerpage />} />
      <Route path="/pacientHome" element={<PacientHome />} />
      {/* Puedes agregar más rutas según tus necesidades */}
    </Routes>
  );
}
export default App;
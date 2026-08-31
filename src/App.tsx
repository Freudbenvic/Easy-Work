import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import NotBuiltYet from '@/pages/NotBuiltYet';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inscription" element={<NotBuiltYet title="Inscription" />} />
        <Route path="/connexion" element={<NotBuiltYet title="Connexion" />} />
        <Route path="/dashboard" element={<NotBuiltYet title="Dashboard" />} />
        <Route path="*" element={<NotBuiltYet title="Page introuvable" />} />
      </Routes>
    </BrowserRouter>
  );
}

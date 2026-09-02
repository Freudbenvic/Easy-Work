import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import NotBuiltYet from '@/pages/NotBuiltYet';
import InscriptionPage from '@/pages/auth/InscriptionPage';
import ConnexionPage from '@/pages/auth/ConnexionPage';
import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import BackgroundRemovalPage from '@/pages/dashboard/tools/BackgroundRemovalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="outils" element={<NotBuiltYet title="Outils" />} />
          <Route
            path="outils/suppression-arriere-plan"
            element={<BackgroundRemovalPage />}
          />
          <Route path="outils/:slug" element={<NotBuiltYet title="Éditeur" />} />
          <Route path="historique" element={<NotBuiltYet title="Historique" />} />
          <Route path="favoris" element={<NotBuiltYet title="Favoris" />} />
          <Route path="credits" element={<NotBuiltYet title="Crédits" />} />
          <Route path="mes-images" element={<NotBuiltYet title="Mes images" />} />
          <Route path="parametres" element={<NotBuiltYet title="Paramètres" />} />
          <Route path="profil" element={<NotBuiltYet title="Profil" />} />
        </Route>

        <Route path="*" element={<NotBuiltYet title="Page introuvable" />} />
      </Routes>
    </BrowserRouter>
  );
}

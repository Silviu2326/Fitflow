import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Import page components
import PaginaDeInicioPage from './features/pagina-de-inicio-landing-page/PaginaDeInicioPage';
import RegistroDeEntrenadorPage from './features/registro-de-entrenador/RegistroDeEntrenadorPage';
import DashboardPrincipalPage from './features/dashboard-principal/DashboardPrincipalPage';
import GestionDeClientesPage from './features/gestion-de-clientes/GestionDeClientesPage';
import PerfilDelClientePage from './features/perfil-del-cliente/PerfilDelClientePage';
import CreadorDePlanesPage from './features/creador-de-planes/CreadorDePlanesPage';
import PagosYFacturacionPage from './features/pagos-y-facturacion/PagosYFacturacionPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<PaginaDeInicioPage />} />
            <Route path="/signup" element={<RegistroDeEntrenadorPage />} />
            <Route path="/dashboard" element={<DashboardPrincipalPage />} />
            <Route path="/clients" element={<GestionDeClientesPage />} />
            <Route path="/clients/:clientId" element={<PerfilDelClientePage />} />
            <Route path="/plans/builder" element={<CreadorDePlanesPage />} />
            <Route path="/billing" element={<PagosYFacturacionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
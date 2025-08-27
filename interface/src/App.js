import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';  // <- corrigé
import DashboardElavira from './components/DashboardElavira';
import DashboardSolenys from './components/Dashboardsolenys';  // <- respect de la casse
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard-elavira" element={<DashboardElavira />} />
          <Route path="/dashboard-solenys" element={<DashboardSolenys />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

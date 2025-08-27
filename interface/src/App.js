import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import DashboardElavira from './components/DashboardElavira';
import DashboardSolenys from './components/DashboardSolenys';
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
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerApp from './pages/CustomerApp';
import BranchDashboard from './pages/BranchDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<CustomerApp />} />
        <Route path="/branch/*" element={<BranchDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

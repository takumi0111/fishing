import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import SpotSearch from './pages/SpotSearch';
import SpotDetail from './pages/SpotDetail';
import FishGuide from './pages/FishGuide';
import EquipmentGuide from './pages/EquipmentGuide';
import SafetyGuide from './pages/SafetyGuide';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SpotSearch />} />
            <Route path="/spot/:id" element={<SpotDetail />} />
            <Route path="/fish-guide" element={<FishGuide />} />
            <Route path="/equipment" element={<EquipmentGuide />} />
            <Route path="/safety" element={<SafetyGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

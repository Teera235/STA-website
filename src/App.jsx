import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CubeSatPage from './pages/CubeSatPage';
import GroundStationPage from './pages/GroundStationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cubesat-systems" element={<CubeSatPage />} />
          <Route path="/ground-station-gis" element={<GroundStationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

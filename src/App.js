import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store';
import Nav from './components/Nav';
import Today from './pages/Today';
import MissionActive from './pages/MissionActive';
import ProofUpload from './pages/ProofUpload';
import Portfolio from './pages/Portfolio';
import Settings from './pages/Settings';
import Circles from './components/Circles';
import Opportunities from './components/Opportunities';
import SkillTree from './components/SkillTree';
import Leaderboard from './components/Leaderboard';
import Analytics from './components/Analytics';

function App() {
  const { setUser } = useStore();

  const handleSetUser = (user) => setUser(user);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white max-w-md mx-auto relative">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<Today />} />
          <Route path="/missions" element={<div className="p-5 pt-6 pb-24"><h1 className="text-3xl font-bold mb-4">MISSIONS</h1><p className="text-gray-400">Loading...</p></div>} />
          <Route path="/mission-active" element={<MissionActive />} />
          <Route path="/proof-upload" element={<ProofUpload />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/skills" element={<SkillTree />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/achievements" element={<div className="p-5 pt-6 pb-24"><h1 className="text-3xl font-bold mb-4">ACHIEVEMENTS</h1><p className="text-gray-400">Coming soon...</p></div>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App;

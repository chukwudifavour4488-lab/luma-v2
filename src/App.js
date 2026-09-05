import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store';
import Nav from './components/Nav';
import Today from './pages/Today';
import MissionActive from './pages/MissionActive';
import ProofUpload from './pages/ProofUpload';
import Portfolio from './pages/Portfolio';
import Settings from './pages/Settings';
function App() {
  const { setUser } = useStore();
  useEffect(() => {
    const userId = localStorage.getItem('lumaUserId') || `user_${Date.now()}`;
    localStorage.setItem('lumaUserId', userId);
    setUser({ id: userId });
  }, [setUser]);
  return (
    <Router>
      <div className="min-h-screen bg-black text-white max-w-md mx-auto relative">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<Today />} />
          <Route path="/missions" element={<div className="p-5 pt-6 pb-24"><h1 className="text-3xl font-bold mb-4">MISSIONS</h1><p className="text-gray-400">Coming soon...</p></div>} />
          <Route path="/mission-active" element={<MissionActive />} />
          <Route path="/proof-upload" element={<ProofUpload />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/achievements" element={<div className="p-5 pt-6 pb-24"><h1 className="text-3xl font-bold mb-4">ACHIEVEMENTS</h1><p className="text-gray-400">Coming soon...</p></div>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}
export default App;
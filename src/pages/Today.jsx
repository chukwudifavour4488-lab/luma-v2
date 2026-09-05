import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import useStore from '../store';
import Button from '../components/Button';
import VoiceCoach from '../components/VoiceCoach';
const Today = () => {
  const navigate = useNavigate();
  const { bestHour, impactScore, streak, missions, setActiveMission } = useStore();
  const nextMission = missions.find(m => m.status === 'pending') || { title: 'Build your first landing page', time: '20 min' };
  const handleStartMission = () => {
    setActiveMission(nextMission);
    navigate('/mission-active');
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <div className="mb-6"><h1 className="text-4xl font-bold">TODAY</h1><p className="text-[#FF00FF] text-xs mt-1">⚡ You ship best at {bestHour}:00</p></div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-[#111] rounded-xl p-3 border border-[#6A0DAD]/20"><p className="text-xs text-gray-400">Impact Score</p><p className="text-2xl font-bold text-[#FF00FF]">{impactScore}</p></div>
        <div className="bg-[#111] rounded-xl p-3 border border-[#6A0DAD]/20"><p className="text-xs text-gray-400">Streak</p><p className="text-2xl font-bold text-[#6A0DAD]">{streak} 🔥</p></div>
      </div>
      <motion.div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#6A0DAD]/30 rounded-2xl p-6 mb-6"><p className="text-sm text-[#FF00FF] font-semibold flex items-center gap-2"><FaFire /> NEXT MISSION</p><h2 className="text-2xl font-bold mt-3">{nextMission.title}</h2><p className="text-sm text-gray-400 mt-2">{nextMission.time}</p></motion.div>
      <div className="space-y-3 mb-6"><Button onClick={handleStartMission}>START MISSION</Button><Button color="#FF00FF" onClick={() => navigate('/missions')}>DO IT WITH ME</Button></div>
      <VoiceCoach />
      <motion.div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-4 mt-6"><div className="flex items-center justify-between mb-3"><p className="text-sm font-semibold">Your Goals</p><p className="text-[#FF00FF] font-bold">3 active</p></div><div className="flex items-center justify-between"><p className="text-sm font-semibold">Missions Done Today</p><p className="text-[#6A0DAD] font-bold">2/5</p></div></motion.div>
    </motion.div>
  );
};
export default Today;
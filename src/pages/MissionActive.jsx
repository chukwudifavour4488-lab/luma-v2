import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import useStore from '../store';
import Button from '../components/Button';
const MissionActive = () => {
  const navigate = useNavigate();
  const { activeMission, missionTimer, setMissionTimer, completeMission } = useStore();
  const [subtasks] = useState([
    { id: 1, text: 'Design homepage layout', done: false },
    { id: 2, text: 'Add hero section', done: false },
    { id: 3, text: 'Deploy to Vercel', done: false },
  ]);
  useEffect(() => {
    if (missionTimer <= 0) return;
    const interval = setInterval(() => setMissionTimer(missionTimer - 1), 1000);
    return () => clearInterval(interval);
  }, [missionTimer, setMissionTimer]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const handleComplete = () => {
    completeMission();
    navigate('/proof-upload');
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-20 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6"><h1 className="text-2xl font-bold">MISSION ACTIVE</h1><motion.div className="text-3xl font-bold text-[#FF00FF] bg-[#111] px-4 py-2 rounded-xl">{formatTime(missionTimer)}</motion.div></div>
      <div className="bg-[#111] border border-[#6A0DAD]/30 rounded-2xl p-6 mb-6"><h2 className="text-xl font-bold">{activeMission?.title || 'Build your first landing page'}</h2><p className="text-sm text-gray-400 mt-2">You know what to do. Go do it. I'll be here when you're finished.</p></div>
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-4 mb-6"><p className="text-sm font-semibold text-[#FF00FF] mb-4">CHECKLIST</p><div className="space-y-3">{subtasks.map((task) => (<div key={task.id} className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg"><div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-[#FF00FF] border-[#FF00FF]' : 'border-gray-600'}`}>{task.done && <FaCheckCircle className="text-black" />}</div><span className={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span></div>))}</div></div>
      <div className="space-y-3"><Button onClick={handleComplete}>I DID IT</Button><Button color="#6A0DAD" onClick={() => navigate('/today')}>TAKE A BREAK</Button></div>
    </motion.div>
  );
};
export default MissionActive;
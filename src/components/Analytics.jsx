import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalendar, FaTrendingUp } from 'react-icons/fa';
import useStore from '../store';

const Analytics = () => {
  const { missions, proofCount, xp, streak } = useStore();
  const [weeklyData] = useState([
    { day: 'Mon', completed: 3 },
    { day: 'Tue', completed: 4 },
    { day: 'Wed', completed: 2 },
    { day: 'Thu', completed: 5 },
    { day: 'Fri', completed: 6 },
    { day: 'Sat', completed: 4 },
    { day: 'Sun', completed: 3 },
  ]);

  const maxCompleted = Math.max(...weeklyData.map(d => d.completed));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">ANALYTICS</h1>
      <p className="text-xs text-[#FF00FF] mb-6">Your progress insights</p>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4">
          <p className="text-xs text-gray-400">Total XP</p>
          <p className="text-3xl font-bold text-[#FF00FF] mt-2">{xp}</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4">
          <p className="text-xs text-gray-400">Proofs</p>
          <p className="text-3xl font-bold text-[#6A0DAD] mt-2">{proofCount}</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4">
          <p className="text-xs text-gray-400">Streak</p>
          <p className="text-3xl font-bold text-orange-500 mt-2">{streak}d 🔥</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4">
          <p className="text-xs text-gray-400">This Week</p>
          <p className="text-3xl font-bold text-green-500 mt-2">27</p>
        </motion.div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold mb-4 flex items-center gap-2"><FaChartLine /> Weekly Activity</p>
        <div className="flex items-end justify-between gap-2 h-32">
          {weeklyData.map((day, i) => {
            const height = (day.completed / maxCompleted) * 100;
            return (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} className="flex-1 bg-gradient-to-t from-[#FF00FF] to-[#6A0DAD] rounded-t-lg relative group">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100">{day.completed}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-between mt-8 text-xs text-gray-500">
          {weeklyData.map((day, i) => (
            <div key={i}>{day.day}</div>
          ))}
        </div>
      </div>

      {/* Growth Stats */}
      <div className="bg-gradient-to-r from-[#6A0DAD] to-[#FF00FF] rounded-xl p-4">
        <p className="font-semibold mb-2 flex items-center gap-2"><FaTrendingUp /> Growth This Month</p>
        <p className="text-2xl font-bold">+42%</p>
        <p className="text-sm text-white/80 mt-1">You're shipping 42% more than last month!</p>
      </div>
    </motion.div>
  );
};

export default Analytics;

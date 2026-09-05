import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaFire, FaTrophy, FaStar } from 'react-icons/fa';
import useStore from '../store';

const mockLeaderboard = [
  { rank: 1, username: 'ShipMaster', score: 15420, streak: 127, avatar: '🚀' },
  { rank: 2, username: 'GoalCrusher', score: 14830, streak: 98, avatar: '💪' },
  { rank: 3, username: 'ProBuilder', score: 14205, streak: 87, avatar: '🏗️' },
  { rank: 4, username: 'SkillChaser', score: 13912, streak: 76, avatar: '🎯' },
  { rank: 5, username: 'You', score: 7420, streak: 42, avatar: '👤', isUser: true },
];

const Leaderboard = () => {
  const [leaderboard] = useState(mockLeaderboard);
  const { impactScore, streak } = useStore();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">LEADERBOARD</h1>
      <p className="text-xs text-[#FF00FF] mb-6">Progress rankings</p>

      <div className="space-y-3">
        {leaderboard.map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-xl p-4 flex items-center gap-3 ${
              user.isUser
                ? 'bg-gradient-to-r from-[#6A0DAD] to-[#FF00FF]'
                : 'bg-[#111] border border-[#6A0DAD]/20'
            }`}
          >
            <div className="text-2xl">{user.avatar}</div>
            <div className="flex-1">
              <p className="font-bold">{user.username}</p>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <FaFire size={12} className="text-orange-500" /> {user.streak} day streak
              </p>
            </div>
            <div className="text-right">
              {user.rank <= 3 && <FaMedal className="text-yellow-500 mb-1" />}
              <p className="font-bold text-lg">{user.score}</p>
              <p className="text-xs text-gray-400">#{user.rank}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaFire, FaTrophy } from 'react-icons/fa';
import useStore from '../store';
import Button from './Button';

const mockCircles = [
  { id: 1, name: 'Career Builders', members: 1248, category: 'work', joinedAt: null },
  { id: 2, name: 'Ship It Club', members: 3421, category: 'builders', joinedAt: null },
  { id: 3, name: 'Learn Together', members: 2105, category: 'learning', joinedAt: null },
  { id: 4, name: 'Fitness Warriors', members: 892, category: 'fitness', joinedAt: null },
  { id: 5, name: 'Creative Minds', members: 1564, category: 'creative', joinedAt: null },
];

const Circles = () => {
  const [circles, setCircles] = useState(mockCircles);
  const [joined, setJoined] = useState([]);

  const joinCircle = (id) => {
    if (!joined.includes(id)) {
      setJoined([...joined, id]);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">LUMA CIRCLES</h1>
      <p className="text-xs text-[#FF00FF] mb-6">Connect with people on the same journey</p>

      <div className="space-y-4">
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{circle.name}</h3>
                <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                  <FaUsers size={12} /> {circle.members.toLocaleString()} members
                </p>
              </div>
              <span className="bg-[#6A0DAD]/20 text-[#FF00FF] text-xs font-semibold px-3 py-1 rounded-full">
                {circle.category}
              </span>
            </div>
            {joined.includes(circle.id) ? (
              <div className="text-sm text-[#6A0DAD] font-semibold flex items-center gap-2">
                <FaTrophy size={14} /> You're in this circle
              </div>
            ) : (
              <Button color="#FF00FF" onClick={() => joinCircle(circle.id)}>
                JOIN CIRCLE
              </Button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Circles;

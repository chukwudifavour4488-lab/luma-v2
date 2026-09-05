import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa';
import useStore from '../store';
import Button from './Button';

const mockOpportunities = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Startup',
    type: 'job',
    deadline: '2024-12-31',
    fitScore: 95,
    description: 'Build products at scale',
  },
  {
    id: 2,
    title: 'React Advanced Course',
    company: 'Frontend Masters',
    type: 'course',
    deadline: '2024-12-15',
    fitScore: 88,
    description: 'Master React patterns',
  },
  {
    id: 3,
    title: 'Startup Founder Program',
    company: 'Y Combinator',
    type: 'accelerator',
    deadline: '2024-12-31',
    fitScore: 82,
    description: 'Build and scale your idea',
  },
];

const typeIcons = {
  job: <FaBriefcase />,
  course: <FaGraduationCap />,
  accelerator: <FaRocket />,
};

const Opportunities = () => {
  const [opportunities] = useState(mockOpportunities);
  const [saved, setSaved] = useState([]);

  const saveOpportunity = (id) => {
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">OPPORTUNITY RADAR</h1>
      <p className="text-xs text-[#FF00FF] mb-6">Matched to your goals</p>

      <div className="space-y-4">
        {opportunities.map((opp) => (
          <motion.div
            key={opp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="text-[#FF00FF] text-2xl mt-1">{typeIcons[opp.type]}</div>
              <div className="flex-1">
                <h3 className="font-bold">{opp.title}</h3>
                <p className="text-sm text-gray-400">{opp.company}</p>
                <p className="text-xs text-gray-500 mt-1">{opp.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-gray-400">Deadline: {new Date(opp.deadline).toLocaleDateString()}</p>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">{opp.fitScore}% match</span>
            </div>
            <Button
              color={saved.includes(opp.id) ? '#6A0DAD' : '#FF00FF'}
              onClick={() => saveOpportunity(opp.id)}
            >
              {saved.includes(opp.id) ? '✓ SAVED' : 'SAVE'}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Opportunities;

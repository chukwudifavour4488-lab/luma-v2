import { motion } from 'framer-motion';
import { FaCode, FaArrowRight } from 'react-icons/fa';

const SkillTree = () => {
  const skillTree = [
    { level: 0, skill: 'Programming', color: '#6A0DAD', x: 50, y: 20 },
    { level: 1, skill: 'HTML', color: '#E67E22', x: 20, y: 50, parent: 0 },
    { level: 1, skill: 'CSS', color: '#3498DB', x: 50, y: 50, parent: 0 },
    { level: 1, skill: 'JavaScript', color: '#F1C40F', x: 80, y: 50, parent: 0 },
    { level: 2, skill: 'React', color: '#61DAFB', x: 80, y: 80, parent: 2 },
    { level: 3, skill: 'Portfolio', color: '#FF00FF', x: 80, y: 110, parent: 4 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">SKILL TREE</h1>
      <p className="text-xs text-[#FF00FF] mb-6">Your growth map</p>

      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 overflow-x-auto">
        <div className="relative h-96 flex flex-col justify-around items-center">
          {skillTree.map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                style={{ backgroundColor: node.color }}
                className="w-24 h-12 rounded-lg flex items-center justify-center font-bold text-center text-sm px-2"
              >
                {node.skill}
              </div>
              {i < skillTree.length - 1 && (
                <FaArrowRight className="my-2 text-[#FF00FF] rotate-90" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="bg-gradient-to-r from-[#6A0DAD] to-[#FF00FF] rounded-2xl p-4 mt-6 text-center">
        <p className="text-sm font-semibold">Your journey: HTML → CSS → JavaScript → React → Portfolio → Job</p>
      </motion.div>
    </motion.div>
  );
};

export default SkillTree;

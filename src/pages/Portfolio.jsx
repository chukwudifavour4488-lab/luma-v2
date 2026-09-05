import { motion } from 'framer-motion';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';
import useStore from '../store';
const Portfolio = () => {
  const { proofs, proofCount } = useStore();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <div className="mb-6"><h1 className="text-3xl font-bold">PORTFOLIO</h1><p className="text-xs text-[#FF00FF] mt-1">YOUR PROOF</p></div>
      <motion.div className="bg-gradient-to-br from-[#6A0DAD] to-[#FF00FF] rounded-2xl p-6 mb-6"><div className="flex items-center gap-3 mb-4"><FaCheckCircle size={32} className="text-white" /><div><p className="text-sm text-white/80">Missions Completed</p><p className="text-3xl font-bold text-white">{proofCount}</p></div></div><p className="text-sm text-white/80">Keep shipping. Keep growing.</p></motion.div>
      <div className="mb-6"><p className="text-sm font-semibold text-[#FF00FF] mb-4">PROOF TIMELINE</p>{proofs.length === 0 ? (<div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-8 text-center"><FaTrophy size={48} className="mx-auto mb-3 text-gray-600" /><p className="text-gray-400">Complete your first mission to unlock your proof.</p></div>) : (<div className="space-y-3">{proofs.map((proof, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#111] border border-[#6A0DAD]/20 rounded-xl p-4"><p className="font-semibold">{proof.title}</p><p className="text-xs text-gray-400 mt-1">{new Date(proof.timestamp).toLocaleDateString()}</p></motion.div>))}</div>)}</div>
      <motion.button className="w-full bg-[#FF00FF] text-black font-bold py-4 rounded-2xl hover:opacity-90 transition">TURN PORTFOLIO INTO CV</motion.button>
    </motion.div>
  );
};
export default Portfolio;
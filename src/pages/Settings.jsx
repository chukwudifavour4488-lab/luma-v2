import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';
import useStore from '../store';
import Button from '../components/Button';
const Settings = () => {
  const navigate = useNavigate();
  const { isPro, setIsPro, coachStyle } = useStore();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">SETTINGS</h1>
      <div className="bg-gradient-to-br from-[#6A0DAD] to-[#FF00FF] rounded-2xl p-6 mb-6"><div className="flex items-center gap-3 mb-4"><FaCrown size={32} /><div><p className="font-semibold">LUMA PRO</p><p className="text-sm text-white/80">$5/month</p></div></div><p className="text-sm text-white/80 mb-4">Energy Match AI • Voice Coach • Habit Stacker • Advanced Analytics</p><Button onClick={() => setIsPro(!isPro)}>{isPro ? '✓ ACTIVE' : 'UPGRADE'}</Button></div>
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 mb-6"><p className="font-semibold mb-4">Coaching Style</p><div className="grid grid-cols-2 gap-3">{['gentle', 'tough', 'friend', 'strategic'].map((style) => (<motion.button key={style} whileTap={{ scale: 0.95 }} className={`p-3 rounded-lg font-semibold transition ${coachStyle === style ? 'bg-[#FF00FF] text-black' : 'bg-[#1a1a1a] border border-[#6A0DAD]/20 text-white'}`}>{style.charAt(0).toUpperCase() + style.slice(1)}</motion.button>))}</div></div>
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6"><p className="text-sm text-gray-400">LUMA v2.0 • Personal Progress Network</p><p className="text-xs text-gray-600 mt-2">Don't just set goals. DO THE THING.</p></div>
    </motion.div>
  );
};
export default Settings;
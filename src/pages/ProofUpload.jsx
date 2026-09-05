import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useStore from '../store';
import Button from '../components/Button';
const ProofUpload = () => {
  const navigate = useNavigate();
  const { addProof } = useStore();
  const [proof, setProof] = useState({ title: '', type: 'photo', url: '' });
  const [loading, setLoading] = useState(false);
  const handleUpload = async () => {
    if (!proof.title) { alert('Please add a title'); return; }
    setLoading(true);
    addProof({ ...proof, timestamp: new Date() });
    setTimeout(() => { setLoading(false); navigate('/portfolio'); }, 1000);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-20 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">SHOW ME YOUR PROOF</h1>
      <p className="text-sm text-gray-400 mb-6">#413 - Evidence-Based Progress</p>
      <div className="grid grid-cols-2 gap-3 mb-6">{['photo', 'screenshot', 'link', 'video'].map((type) => (<motion.button key={type} whileTap={{ scale: 0.95 }} onClick={() => setProof({ ...proof, type })} className={`p-4 rounded-xl font-semibold transition ${proof.type === type ? 'bg-[#FF00FF] text-black' : 'bg-[#111] border border-[#6A0DAD]/20 text-white'}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</motion.button>))}</div>
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 mb-6"><label className="block text-sm font-semibold mb-2">What did you accomplish?</label><input type="text" placeholder="e.g., Shipped landing page with 50 visitors" value={proof.title} onChange={(e) => setProof({ ...proof, title: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#6A0DAD]/30 rounded-lg p-3 text-white placeholder-gray-600 focus:border-[#FF00FF]"/></div>
      {proof.type === 'link' && (<div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 mb-6"><label className="block text-sm font-semibold mb-2">Link</label><input type="url" placeholder="https://example.com" value={proof.url} onChange={(e) => setProof({ ...proof, url: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#6A0DAD]/30 rounded-lg p-3 text-white placeholder-gray-600 focus:border-[#FF00FF]"/></div>)}
      <div className="space-y-3"><Button onClick={handleUpload} disabled={loading} color="#FF00FF">{loading ? 'LOCKING PROOF...' : 'LOCK PROOF'}</Button><Button onClick={() => navigate('/today')}>SKIP FOR NOW</Button></div>
    </motion.div>
  );
};
export default ProofUpload;
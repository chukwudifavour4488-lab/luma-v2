import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCrown, FaToggleOn } from 'react-icons/fa';
import useStore from '../store';
import Button from '../components/Button';

const Settings = () => {
  const navigate = useNavigate();
  const { isPro, setIsPro, coachStyle } = useStore();

  const handleStripeCheckout = async () => {
    // In production, integrate with Stripe
    alert('Redirecting to Stripe checkout...');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-black text-white p-5 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">SETTINGS</h1>

      {/* LUMA PRO */}
      <div className="bg-gradient-to-br from-[#6A0DAD] to-[#FF00FF] rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <FaCrown size={32} />
          <div>
            <p className="font-semibold">LUMA PRO</p>
            <p className="text-sm text-white/80">$5/month</p>
          </div>
        </div>
        <div className="space-y-2 mb-4 text-sm text-white/90">
          <p>✓ Energy Match AI</p>
          <p>✓ Voice Coach 24/7</p>
          <p>✓ Habit Stacker</p>
          <p>✓ Advanced Analytics</p>
          <p>✓ Unlimited Goals</p>
        </div>
        <Button onClick={handleStripeCheckout}>
          {isPro ? '✓ ACTIVE' : 'UPGRADE TO PRO'}
        </Button>
      </div>

      {/* COACHING STYLE */}
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 mb-6">
        <p className="font-semibold mb-4">Coaching Style</p>
        <div className="grid grid-cols-2 gap-3">
          {['gentle', 'tough', 'friend', 'strategic'].map((style) => (
            <motion.button
              key={style}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg font-semibold transition ${
                coachStyle === style
                  ? 'bg-[#FF00FF] text-black'
                  : 'bg-[#1a1a1a] border border-[#6A0DAD]/20 text-white'
              }`}
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6 mb-6">
        <p className="font-semibold mb-4">Features</p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <span className="text-[#FF00FF]">✓ On</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <span className="text-[#FF00FF]">✓ On</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Voice Coach</span>
            <span className={isPro ? 'text-[#FF00FF]' : 'text-gray-500'}>{isPro ? '✓ Enabled' : 'Pro only'}</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-[#111] border border-[#6A0DAD]/20 rounded-2xl p-6">
        <p className="text-sm text-gray-400 mb-2">LUMA v2.0 • Personal Progress Network</p>
        <p className="text-xs text-gray-600">"Don't just set goals. DO THE THING."</p>
        <p className="text-xs text-gray-600 mt-4">© 2024 LUMA. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Settings;

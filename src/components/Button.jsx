import { motion } from 'framer-motion';
const Button = ({ children, onClick, color = '#6A0DAD', disabled = false }) => (
  <motion.button whileTap={{ scale: disabled ? 1 : 0.95 }} onClick={onClick} disabled={disabled} style={{ backgroundColor: color }} className={`w-full text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 transition ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}>{children}</motion.button>
);
export default Button;
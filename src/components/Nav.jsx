import { Link } from 'react-router-dom';
import { FaHome, FaFire, FaUser, FaTrophy, FaCog } from 'react-icons/fa';
const Nav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#6A0DAD]/20 p-4 max-w-md mx-auto">
    <div className="flex justify-around items-center">
      <Link to="/today" className="text-[#6A0DAD] hover:text-[#FF00FF] transition"><FaHome size={24} /></Link>
      <Link to="/missions" className="text-gray-500 hover:text-[#FF00FF] transition"><FaFire size={24} /></Link>
      <Link to="/portfolio" className="text-gray-500 hover:text-[#FF00FF] transition"><FaUser size={24} /></Link>
      <Link to="/achievements" className="text-gray-500 hover:text-[#FF00FF] transition"><FaTrophy size={24} /></Link>
      <Link to="/settings" className="text-gray-500 hover:text-[#FF00FF] transition"><FaCog size={24} /></Link>
    </div>
  </div>
);
export default Nav;
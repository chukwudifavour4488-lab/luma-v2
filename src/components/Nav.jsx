import { Link } from 'react-router-dom';
import { FaHome, FaFire, FaUser, FaTrophy, FaCog, FaChartLine, FaMapPin, FaTree } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [showMore, setShowMore] = useState(false);

  const mainLinks = [
    { to: '/today', icon: FaHome, label: 'Home' },
    { to: '/missions', icon: FaFire, label: 'Missions' },
    { to: '/portfolio', icon: FaUser, label: 'Portfolio' },
    { to: '/achievements', icon: FaTrophy, label: 'Achievements' },
  ];

  const moreLinks = [
    { to: '/circles', icon: FaUser, label: 'Circles' },
    { to: '/opportunities', icon: FaMapPin, label: 'Opportunities' },
    { to: '/skills', icon: FaTree, label: 'Skills' },
    { to: '/leaderboard', icon: FaTrophy, label: 'Leaderboard' },
    { to: '/analytics', icon: FaChartLine, label: 'Analytics' },
    { to: '/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#6A0DAD]/20 max-w-md mx-auto">
        <div className="flex justify-around items-center p-3">
          {mainLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.to} to={link.to} className="text-gray-500 hover:text-[#FF00FF] transition p-3">
                <Icon size={22} />
              </Link>
            );
          })}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMore(!showMore)}
            className="text-[#6A0DAD] hover:text-[#FF00FF] transition p-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 left-0 right-0 bg-[#111] border border-[#6A0DAD]/20 rounded-t-2xl max-w-md mx-auto p-4"
        >
          <h3 className="text-sm font-semibold text-[#FF00FF] mb-4">MORE</h3>
          <div className="grid grid-cols-3 gap-4">
            {moreLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setShowMore(false)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#6A0DAD]/20 transition"
                >
                  <Icon className="text-[#FF00FF]" size={20} />
                  <span className="text-xs text-center">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Nav;

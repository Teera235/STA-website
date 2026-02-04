import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isKlonasPage = location.pathname === '/klonas';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles based on page and scroll
  const navBgClass = isKlonasPage 
    ? (isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/80')
    : 'backdrop-blur-md';
  
  const textClass = isKlonasPage ? 'text-gray-700' : 'text-gray-300';
  const textHoverClass = isKlonasPage ? 'hover:text-burnt-orange' : 'hover:text-burnt-orange';
  const borderClass = isKlonasPage ? 'border-gray-200' : 'border-gray-700';
  const mobileBgClass = isKlonasPage ? 'bg-white/95' : 'backdrop-blur-md';
  const mobileBorderClass = isKlonasPage ? 'border-gray-200' : 'border-white/10';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.webp" alt="STA Logo" className="h-10 md:h-12 w-auto" />
              <div>
                <div className="text-base md:text-lg font-black tracking-tight text-burnt-orange">STA</div>
                <div className={`text-[9px] md:text-[10px] uppercase tracking-widest font-semibold ${isKlonasPage ? 'text-gray-500' : 'text-gray-400'}`}>KMUTT</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#home" className={`text-sm font-semibold ${textClass} ${textHoverClass} transition-colors`}>Home</a>
            <a href="/#about" className={`text-sm font-semibold ${textClass} ${textHoverClass} transition-colors`}>About</a>
            <a href="/#projects" className={`text-sm font-semibold ${textClass} ${textHoverClass} transition-colors`}>Projects</a>
            <Link to="/cubesat-systems" className={`text-sm font-semibold ${textClass} ${textHoverClass} transition-colors`}>CubeSat</Link>
            <Link to="/klonas" className={`text-sm font-semibold ${location.pathname === '/klonas' ? 'text-burnt-orange' : textClass} ${textHoverClass} transition-colors`}>KLONAS</Link>
            <a href="/#news" className={`text-sm font-semibold ${textClass} ${textHoverClass} transition-colors`}>News</a>
            <a href="/#contact" className="px-6 py-2 bg-burnt-orange text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-md">Contact</a>
            
            {/* KMUTT Logo */}
            <div className={`ml-4 pl-4 border-l ${borderClass}`}>
              <img src="/kmutt-logo.webp" alt="KMUTT" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${textClass} ${textHoverClass} transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className={`md:hidden ${mobileBgClass} border-t ${mobileBorderClass} shadow-lg`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-6 space-y-1">
            <a 
              href="/#home" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              Home
            </a>
            <a 
              href="/#about" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              About
            </a>
            <a 
              href="/#projects" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              Projects
            </a>
            <Link 
              to="/cubesat-systems" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              CubeSat Systems
            </Link>
            <Link 
              to="/klonas" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${location.pathname === '/klonas' ? 'text-burnt-orange' : textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              KLONAS Team
            </Link>
            <a 
              href="/#news" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors border-b ${mobileBorderClass}`}
            >
              News
            </a>
            <a 
              href="/#contact" 
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-semibold ${textClass} ${textHoverClass} transition-colors`}
            >
              Contact
            </a>
            <div className="pt-4 flex items-center justify-center">
              <img src="/kmutt-logo.webp" alt="KMUTT" className={`h-12 w-auto ${isKlonasPage ? 'opacity-80' : 'opacity-60'}`} />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

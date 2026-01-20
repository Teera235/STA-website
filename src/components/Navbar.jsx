import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.webp" alt="STA Logo" className="h-12 w-auto" />
            <div>
              <div className="text-lg font-black tracking-tight text-burnt-orange">STA</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">KMUTT</div>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">Home</a>
            <a href="#about" className="text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">About</a>
            <a href="#projects" className="text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">Projects</a>
            <a href="#news" className="text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">News</a>
            <a href="#contact" className="px-6 py-2 bg-burnt-orange text-white text-sm font-bold rounded hover:bg-deep-ember transition-colors">Contact</a>
            
            {/* KMUTT Logo */}
            <div className="ml-4 pl-4 border-l border-gray-700">
              <img src="/kmutt-logo.webp" alt="KMUTT" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-burnt-orange transition-colors"
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
          className="md:hidden bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-3">
            <a href="#home" className="block py-2 text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">Home</a>
            <a href="#about" className="block py-2 text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">About</a>
            <a href="#projects" className="block py-2 text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">Projects</a>
            <a href="#news" className="block py-2 text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">News</a>
            <a href="#contact" className="block py-2 text-sm font-semibold text-gray-300 hover:text-burnt-orange transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

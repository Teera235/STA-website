import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-space-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Demo Notice */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-burnt-orange/10 border border-burnt-orange/30 rounded-full">
            <svg className="w-5 h-5 text-burnt-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold uppercase tracking-wider text-burnt-orange">
              Demo Version - Under Development
            </span>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="STA Logo" className="h-10 w-auto" />
              <div>
                <div className="text-xl font-black text-burnt-orange">STA</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">KMUTT</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building Thailand's space future through hands-on satellite and rocket engineering.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-burnt-orange transition-colors">Home</a></li>
              <li><a href="#projects" className="text-sm text-gray-400 hover:text-burnt-orange transition-colors">Projects</a></li>
              <li><a href="#about" className="text-sm text-gray-400 hover:text-burnt-orange transition-colors">About</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-burnt-orange transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Connect</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">King Mongkut's University</p>
              <p className="text-sm text-gray-400">of Technology Thonburi</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-burnt-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-burnt-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Developer Credit - Professional */}
        <motion.div
          className="border-t border-gray-800 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left - Copyright */}
            <div className="text-sm text-gray-500">
              © 2025 STA KMUTT. All rights reserved.
            </div>

            {/* Right - Developer Credit */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Developed by</span>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-burnt-orange/50 transition-all group">
                <img 
                  src="/developer.webp" 
                  alt="Teerathap Yaisungnoen" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-burnt-orange"
                />
                <span className="text-sm font-semibold text-white group-hover:text-burnt-orange transition-colors">
                  Teerathap Yaisungnoen
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;

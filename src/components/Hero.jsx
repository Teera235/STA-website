import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/bg.webp" 
          alt="Background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 leading-none">
              <span className="block text-6xl md:text-8xl font-black text-burnt-orange tracking-tight mb-2">STA</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Space Technology</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">& Astronomy Club</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Student satellite and space technology team from KMUTT developing <span className="text-burnt-orange font-semibold">CubeSats</span> and competing at <span className="text-burnt-orange font-semibold">Spaceport America Cup</span> — advancing Thailand's space capabilities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-deep-ember transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-burnt-orange/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Us
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#team" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
              <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Satellite</div>
              <div className="text-sm font-semibold group-hover:text-burnt-orange transition-colors">CubeSat</div>
            </a>
            
            <a href="#vehicle" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
              <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Rocket</div>
              <div className="text-sm font-semibold group-hover:text-burnt-orange transition-colors">Launch Vehicle</div>
            </a>
            
            <a href="#mission" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
              <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Mission</div>
              <div className="text-sm font-semibold group-hover:text-burnt-orange transition-colors">Operations</div>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;

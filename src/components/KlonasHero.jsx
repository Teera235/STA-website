import { motion } from 'framer-motion';

const KlonasHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img 
          src="/klonas-bg.jpg" 
          alt="KLONAS Team Background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/klonas-logo.png" 
              alt="KLONAS Logo" 
              className="h-32 md:h-40 mx-auto mb-6"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-burnt-orange">KLONAS</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            KMUTT Low Orbital Nano Satellite Development Team
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A satellite development team founded under the Space Technology Association (STA Club) 
            at King Mongkut's University of Technology Thonburi (KMUTT), dedicated to establishing 
            a strong foundation in space technology and developing functional satellites.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#about"
              className="px-8 py-4 bg-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-deep-ember transition-all hover:scale-105 shadow-lg hover:shadow-burnt-orange/50"
            >
              Learn More
            </a>
            <a
              href="#team"
              className="px-8 py-4 border-2 border-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-burnt-orange/10 transition-all hover:scale-105"
            >
              Meet the Team
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-3xl font-black text-burnt-orange mb-1">6</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Subsystems</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-3xl font-black text-burnt-orange mb-1">1U</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">CubeSat</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-3xl font-black text-burnt-orange mb-1">2025</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Founded</div>
            </div>
          </motion.div>
        </div>
      </div>

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

export default KlonasHero;

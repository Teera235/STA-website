import { motion } from 'framer-motion';

const KlonasHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Blur and Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/klonas-bg.webp" 
          alt="KLONAS Team Background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
          
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/klonas-logo.webp" 
                alt="KLONAS Logo" 
                className="h-32 md:h-40 mb-6"
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="mb-6 leading-none">
                <span className="block text-6xl md:text-8xl font-black text-burnt-orange tracking-tight mb-2">KLONAS</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">KMUTT Low Orbital Nano</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">Satellite Development Team</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A satellite development team founded under the <span className="text-burnt-orange font-semibold">Space Technology Association (STA Club)</span> at King Mongkut's University of Technology Thonburi (KMUTT), dedicated to establishing a strong foundation in space technology and developing functional satellites.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#about"
                className="px-8 py-4 bg-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-deep-ember transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#team"
                className="px-8 py-4 border-2 border-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-burnt-orange/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Meet the Team
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
                <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Subsystems</div>
                <div className="text-2xl font-black text-white group-hover:text-burnt-orange transition-colors">6</div>
              </div>
              
              <div className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
                <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Platform</div>
                <div className="text-2xl font-black text-white group-hover:text-burnt-orange transition-colors">1U</div>
              </div>
              
              <div className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-burnt-orange/50 rounded transition-all">
                <div className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-1">Founded</div>
                <div className="text-2xl font-black text-white group-hover:text-burnt-orange transition-colors">2025</div>
              </div>
            </motion.div>

          </div>

          {/* Right Content - CubeSat Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <img 
                src="/cubesat-model.webp" 
                alt="CubeSat Model" 
                className="w-full max-w-lg drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burnt-orange/20 to-transparent rounded-lg blur-3xl -z-10"></div>
            </div>
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

export default KlonasHero;

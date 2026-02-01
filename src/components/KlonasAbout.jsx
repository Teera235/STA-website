import { motion } from 'framer-motion';

const KlonasAbout = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-space-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-burnt-orange/10 border border-burnt-orange/30 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-4">
            About KLONAS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Team <span className="text-burnt-orange">Introduction</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-burnt-orange/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-burnt-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-burnt-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-burnt-orange">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                KLONAS (KMUTT Low Orbital Nano Satellite Development Team) is a satellite development team 
                founded on September 2, 2025, under the Space Technology Association (STA Club) at King Mongkut's 
                University of Technology Thonburi (KMUTT).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The team was formed by a group of students united by a single goal: to establish a strong foundation 
                in space technology within the university and eventually develop functional satellites in the future. 
                We believe that starting small today will pave the way for achieving remarkable accomplishments on the global stage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The primary objective of KLONAS is to enhance members' knowledge and experience by engaging them in 
                satellite development, covering all aspects from design and development to system testing. Through this 
                experience, KLONAS aims to serve as a central hub for sharing knowledge with juniors continuously.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-burnt-orange/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-burnt-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-burnt-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-burnt-orange">Member Opportunities</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Gain hands-on experience in satellite development, from design to testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Develop practical skills in electronics, programming, mechanical design, and project management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Build teamwork, problem-solving, and leadership skills for future careers in space technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Participate in workshops, competitions, and facility visits</span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-burnt-orange/10 border border-burnt-orange/30 rounded">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-burnt-orange">Advisor:</span> Dr.Jiravit Pratvittaya from the Department of Control and Instrumentation Engineering
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  <span className="font-bold text-burnt-orange">Workspace:</span> Space Technology Association (STA Club) room, N18 Building, Bangmod Campus
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KlonasAbout;

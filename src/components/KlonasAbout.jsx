import { motion } from 'framer-motion';

const KlonasAbout = () => {
  return (
    <section id="about" className="relative py-0 overflow-hidden">
      {/* Hero-style Section with Background Image */}
      <div className="relative min-h-screen flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/team/first-meet-6.webp" 
            alt="KLONAS Team"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.25) blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Building Thailand's<br />
              <span className="text-burnt-orange">Space Future</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              <strong className="text-burnt-orange">KLONAS</strong> (KMUTT Low Orbital Nano Satellite Development Team) is a dedicated student team under the Space Technology Association (STA Club) at King Mongkut's University of Technology Thonburi. We're building real engineering capability through hands-on CubeSat development.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-12 bg-burnt-orange rounded-full"></span>
                  Our Mission
                </h3>
                
                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p>
                    <strong className="text-burnt-orange">KLONAS</strong> was founded on <strong className="text-white">September 2, 2025</strong>, bringing together passionate students who share a common vision: to establish Thailand's presence in space technology.
                  </p>
                  <p>
                    Our team operates under the <strong className="text-white">Space Technology Association (STA Club)</strong> at KMUTT, working collaboratively across multiple engineering disciplines. From electrical systems and flight software to structural design and communications, every member plays a crucial role.
                  </p>
                  <p>
                    We're not just building satellites—we're building <strong className="text-burnt-orange">Thailand's space engineering capability</strong>. Through hands-on development of 1U CubeSats, our team gains real-world experience in systems engineering, project management, and international collaboration.
                  </p>
                  <p>
                    Starting with drone-deployed prototypes and progressing to high-altitude balloon tests, KLONAS follows a systematic approach. Our ultimate goal: <strong className="text-white">a fully operational CubeSat in LEO</strong>, designed, built, and operated entirely by Thai students.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-white/30">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-burnt-orange mb-2">2025</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider font-bold">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-burnt-orange mb-2">6</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider font-bold">Subsystems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-burnt-orange mb-2">1U</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider font-bold">CubeSat</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Member Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-12 bg-burnt-orange rounded-full"></span>
                  Member Opportunities
                </h3>
                
                <ul className="space-y-6">
                  <li className="group">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-burnt-orange font-black text-2xl">→</span>
                      <h4 className="font-bold text-white text-lg">Real Engineering Experience</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed pl-9">Work on actual CubeSat subsystems—from power management and attitude control to communication systems and payload integration.</p>
                  </li>

                  <li className="group">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-burnt-orange font-black text-2xl">→</span>
                      <h4 className="font-bold text-white text-lg">Multidisciplinary Collaboration</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed pl-9">Join one of six engineering subsystems or three support teams. Learn to work across disciplines and solve real-world technical challenges.</p>
                  </li>

                  <li className="group">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-burnt-orange font-black text-2xl">→</span>
                      <h4 className="font-bold text-white text-lg">Professional Development</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed pl-9">Build your portfolio with documented projects, technical reports, and presentations. Develop leadership skills through team coordination.</p>
                  </li>

                  <li className="group">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-burnt-orange font-black text-2xl">→</span>
                      <h4 className="font-bold text-white text-lg">Industry Connections</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed pl-9">Connect with space industry professionals, participate in workshops and competitions, and visit aerospace facilities.</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Team Info Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Advisor Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-burnt-orange/90 to-orange-600/90 backdrop-blur-sm rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <img 
                    src="/advisor.webp" 
                    alt="Dr. Jiravit Pratvittaya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Team Advisor</h3>
                  <p className="text-white/90 text-sm">Academic Guidance</p>
                </div>
              </div>
              <div className="space-y-1 pl-1">
                <p className="text-lg font-bold">Dr. Jiravit Pratvittaya</p>
                <p className="text-white/95 text-sm">Department of Control and Instrumentation Engineering</p>
                <p className="text-white/95 text-sm">King Mongkut's University of Technology Thonburi</p>
              </div>
            </motion.div>

            {/* Workspace Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-700/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white p-2">
                  <img 
                    src="/kmutt-logo.webp" 
                    alt="KMUTT Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Our Workspace</h3>
                  <p className="text-white/90 text-sm">Main Operations</p>
                </div>
              </div>
              <div className="space-y-1 pl-1">
                <p className="text-lg font-bold">STA Club Room</p>
                <p className="text-white/95 text-sm">N18 Building, Bangmod Campus</p>
                <p className="text-white/95 text-sm">King Mongkut's University of Technology Thonburi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlonasAbout;

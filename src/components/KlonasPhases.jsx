import { motion } from 'framer-motion';

const KlonasPhases = () => {
  const phases = [
    {
      phase: "1F",
      name: "CUBESAT-1U Prototype Funding",
      description: "Provided by the team advisor as a proof of concept",
      timeline: "-",
      budget: "10K - 15K THB",
      status: "completed"
    },
    {
      phase: "1D",
      name: "CUBESAT-1U Prototype Development",
      description: "Develop 1U CubeSat designed to operate at altitudes up to 1 km, deployed from a drone.",
      timeline: "Before end of Semester 2, 2025 - 2026",
      budget: "10K - 15K THB",
      status: "current"
    },
    {
      phase: "2F",
      name: "CUBESAT-1U HAB Funding",
      description: "Seek support and sponsorship from external companies and organizations.",
      timeline: "TBD",
      budget: "TBD",
      status: "upcoming"
    },
    {
      phase: "2D",
      name: "CUBESAT-1U HAB Development",
      description: "Develop 1U CubeSat designed to operate at altitudes up to 30-50 km, deployed from a high-altitude balloon.",
      timeline: "TBD",
      budget: "100K - 150K THB",
      status: "upcoming"
    },
    {
      phase: "3F",
      name: "CUBESAT-1U LEO Funding",
      description: "TBD",
      timeline: "TBD",
      budget: "TBD",
      status: "future"
    },
    {
      phase: "3D",
      name: "CUBESAT-1U LEO Development",
      description: "Develop 1U CubeSat designed for actual deployment into low Earth orbit",
      timeline: "TBD",
      budget: "500K - 1M THB",
      status: "future"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 border-green-500 text-green-400';
      case 'current': return 'bg-burnt-orange/20 border-burnt-orange text-burnt-orange';
      case 'upcoming': return 'bg-blue-500/20 border-blue-500 text-blue-400';
      case 'future': return 'bg-gray-500/20 border-gray-500 text-gray-400';
      default: return 'bg-gray-500/20 border-gray-500 text-gray-400';
    }
  };

  return (
    <section id="phases" className="py-20 bg-space-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Team <span className="text-burnt-orange">Plan</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm">The plan may be revised as necessary</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-burnt-orange/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-burnt-orange">Phase {phase.phase}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(phase.status)}`}>
                  {phase.status.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{phase.name}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{phase.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Timeline:</span>
                  <span className="text-white font-semibold">{phase.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Budget:</span>
                  <span className="text-burnt-orange font-semibold">{phase.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-burnt-orange/10 border border-burnt-orange/30 rounded-lg"
        >
          <h3 className="text-xl font-bold text-burnt-orange mb-3">Phase 1D: CUBESAT-1U Prototype Development</h3>
          <p className="text-gray-300 mb-4">Purpose:</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-burnt-orange mt-1">•</span>
              <span>To provide team members with hands-on experience before tackling more challenging tasks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burnt-orange mt-1">•</span>
              <span>To help team members become familiar with the working environment.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default KlonasPhases;

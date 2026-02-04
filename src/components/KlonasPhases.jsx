import { motion } from 'framer-motion';

const KlonasPhases = () => {
  const phases = [
    {
      phase: "1D",
      name: "Prototype Development",
      description: "1U CubeSat for drone deployment (up to 1 km altitude)",
      timeline: "Semester 2, 2025-2026",
      budget: "10-15K THB",
      status: "current"
    },
    {
      phase: "2D",
      name: "HAB Development",
      description: "1U CubeSat for high-altitude balloon (30-50 km)",
      timeline: "TBD",
      budget: "100-150K THB",
      status: "upcoming"
    },
    {
      phase: "3D",
      name: "LEO Development",
      description: "1U CubeSat for low Earth orbit deployment",
      timeline: "TBD",
      budget: "500K-1M THB",
      status: "future"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'current': return 'bg-orange-100 border-burnt-orange text-burnt-orange';
      case 'upcoming': return 'bg-blue-50 border-blue-400 text-blue-600';
      case 'future': return 'bg-gray-100 border-gray-400 text-gray-600';
      default: return 'bg-gray-100 border-gray-400 text-gray-600';
    }
  };

  return (
    <section id="phases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-4">
            Development Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Mission <span className="text-burnt-orange">Phases</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our phased approach to developing CubeSat capabilities, from prototype to orbital deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-burnt-orange hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-black">{phase.phase}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getStatusColor(phase.status)}`}>
                  {phase.status.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{phase.description}</p>
              
              <div className="space-y-2 text-sm pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-500">Timeline:</span>
                  <span className="text-gray-900 font-semibold">{phase.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Budget:</span>
                  <span className="text-burnt-orange font-semibold">{phase.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KlonasPhases;

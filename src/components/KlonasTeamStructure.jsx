import { motion } from 'framer-motion';

const KlonasTeamStructure = () => {
  const subsystems = [
    {
      name: "ADCS",
      description: "Attitude determination, control systems, and parachute design"
    },
    {
      name: "Electrical",
      description: "Power systems, battery management, and PCB development"
    },
    {
      name: "OBC & Flight Software",
      description: "Onboard computer selection and flight software development"
    },
    {
      name: "Communications",
      description: "Satellite antennas, communication modules, and ground tracking"
    },
    {
      name: "Structure & Thermal",
      description: "CubeSat frame design and thermal management"
    },
    {
      name: "Payload",
      description: "Earth imaging systems and environmental sensors"
    }
  ];

  const supportTeams = [
    {
      name: "Documentation",
      description: "Project reports and data management"
    },
    {
      name: "PR & Outreach",
      description: "Public relations and sponsor coordination"
    },
    {
      name: "Finance",
      description: "Budget planning and financial operations"
    }
  ];

  return (
    <section id="structure" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-4">
            Organization
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Team <span className="text-burnt-orange">Structure</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized subsystems working together to develop our CubeSat mission
          </p>
        </motion.div>

        {/* Engineering Subsystems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Engineering Subsystems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((subsystem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-burnt-orange hover:shadow-lg transition-all group"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-burnt-orange transition-colors">{subsystem.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{subsystem.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Teams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Teams</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportTeams.map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-burnt-orange hover:shadow-lg transition-all group"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-burnt-orange transition-colors">{team.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KlonasTeamStructure;

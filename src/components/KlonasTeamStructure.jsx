import { motion } from 'framer-motion';

const KlonasTeamStructure = () => {
  const subsystems = [
    {
      name: "ADCS Team",
      leader: "ADCS Leader",
      responsibilities: [
        "Select sensors such as gyroscopes, accelerometers, magnetometers, GPS, or alternatives.",
        "Software to determine satellite position, attitude and landing point in real-time.",
        "Design & Develop parachute-based deceleration system."
      ]
    },
    {
      name: "Electrical Team",
      leader: "Electrical Leader",
      responsibilities: [
        "Select battery.",
        "Selected battery management system.",
        "Develop print circuit board.",
        "Provide capability to shut down selected payloads remotely to save energy.",
        "Manage power distribution and regulation."
      ]
    },
    {
      name: "Onboard Computer & Flight Software Team",
      leader: "OBC & FS Leader",
      responsibilities: [
        "Select onboard computer.",
        "Develop flight software."
      ]
    },
    {
      name: "Communications & Ground Segment Team",
      leader: "Comms & GS Leader",
      responsibilities: [
        "Select or develop Satellite antenna.",
        "Select satellite communication modules.",
        "Develop ground segment auto tracking antenna."
      ]
    },
    {
      name: "Structure & Thermal Team",
      leader: "Structure & Thermal Leader",
      responsibilities: [
        "Develop CUBESAT Frame.",
        "Evaluate thermal conditions and prevent overheating."
      ]
    },
    {
      name: "Payload Team",
      leader: "Payload Leader",
      responsibilities: [
        "Select & Develop Earth imaging system.",
        "Select environmental sensors/modules.",
        "Ensure proper installation and calibration of these sensors.",
        "Select and assess the possibility of additional mission concepts beyond those previously specified for potential future research publication."
      ]
    }
  ];

  const supportTeams = [
    {
      name: "Documentation Team",
      responsibilities: [
        "Prepare project documents, including progress reports, project plans, and other relevant materials.",
        "Organize and maintain experimental and project data in a systematic manner."
      ]
    },
    {
      name: "PR & Outreach Team",
      responsibilities: [
        "Develop and maintain the team's public image and outreach activities",
        "Produce and manage online media content to promote the team.",
        "Contact with sponsors and external partners to secure support."
      ]
    },
    {
      name: "Finance Team",
      responsibilities: [
        "Prepare project budgets, including expense calculations, equipment estimates, and material costs.",
        "Manage financial operations: disbursements, record-keeping, and budget summaries.",
        "Monitor expenditures to ensure compliance with team and university regulations."
      ]
    }
  ];

  return (
    <section id="structure" className="py-20 bg-gradient-to-b from-gray-900 to-space-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Team <span className="text-burnt-orange">Structure</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto"></div>
        </motion.div>

        {/* Engineering Subsystems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-burnt-orange mb-8 text-center">Engineering Subsystems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((subsystem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-burnt-orange/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-burnt-orange/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-burnt-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{subsystem.name}</h4>
                    <p className="text-xs text-burnt-orange">{subsystem.leader}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {subsystem.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-burnt-orange mt-1 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
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
          <h3 className="text-3xl font-bold text-burnt-orange mb-8 text-center">Team Support</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportTeams.map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-burnt-orange/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-burnt-orange/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-burnt-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">{team.name}</h4>
                </div>
                <ul className="space-y-2">
                  {team.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-burnt-orange mt-1 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-burnt-orange/10 border border-burnt-orange/30 rounded-lg text-center"
        >
          <p className="text-gray-300 text-sm italic">
            * Subsystem Responsibilities are only a preliminary allocation. All teams should coordinate continuously to ensure that the outcomes meet the Satellite Requirements. *
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KlonasTeamStructure;

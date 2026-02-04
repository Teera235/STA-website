import { motion } from 'framer-motion';
import { useState } from 'react';

const KlonasOverview = () => {
  const [activeTab, setActiveTab] = useState('flight');

  const systems = {
    flight: [
      {
        name: "Drone",
        description: "Deployment platform for satellite testing",
        specs: "Max altitude: 2 km"
      },
      {
        name: "CubeSat 1U",
        description: "Primary satellite platform",
        specs: "Phase 1D prototype"
      },
      {
        name: "Parachute",
        description: "Deceleration and landing system",
        specs: "Minimize impact damage"
      }
    ],
    ground: [
      {
        name: "Yagi-Uda Antenna",
        description: "Data reception via LoRa",
        specs: "Range: 10 km"
      },
      {
        name: "Auto Tracking",
        description: "Automated antenna positioning",
        specs: "Elevation & azimuth control"
      },
      {
        name: "Dashboard",
        description: "Real-time data visualization",
        specs: "Monitoring & analysis"
      }
    ],
    satellite: [
      {
        name: "Frame Structure",
        description: "Primary structural framework",
        specs: "CubeSat standard"
      },
      {
        name: "Solar Panels",
        description: "Power generation system",
        specs: "Battery recharging"
      },
      {
        name: "PCBs",
        description: "Electronics & power distribution",
        specs: "3 board types"
      },
      {
        name: "Flight Software",
        description: "Onboard control system",
        specs: "Mission operations"
      }
    ]
  };

  const tabs = [
    { id: 'flight', label: 'In-Flight' },
    { id: 'ground', label: 'Ground Segment' },
    { id: 'satellite', label: 'CubeSat Systems' }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-4">
            Mission Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            System <span className="text-burnt-orange">Overview</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive mission components from deployment to ground operations
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border-2 border-gray-200 rounded-xl p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-burnt-orange text-white shadow-md'
                    : 'text-gray-600 hover:text-burnt-orange'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {systems[activeTab].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-burnt-orange hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
              <div className="pt-3 border-t border-gray-200">
                <span className="text-xs text-burnt-orange font-semibold">{item.specs}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KlonasOverview;

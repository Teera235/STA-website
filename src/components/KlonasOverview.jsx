import { motion } from 'framer-motion';

const KlonasOverview = () => {
  const systems = [
    {
      title: "In-Flight Configuration",
      items: [
        {
          name: "Drone",
          description: "Used for lifting and deploying satellites and related equipment to the designated altitude.",
          specs: "Maximum altitude: 2 km, Minimum altitude: 900 m",
          image: "/deployment/drone.png",
          responsible: "Team Leader / Deputy Team Leader"
        },
        {
          name: "Deployment Mechanism",
          description: "Used to release the CubeSat and its parachute from the drone. The system operates independently from the main satellite and is also responsible for receiving data from the research payload.",
          image: "/deployment/deployment-mechanism.png",
          responsible: "Team Leader (sky)"
        },
        {
          name: "Parachute",
          description: "Designed to decelerate the CubeSat during descent, minimize impact damage, and extend the satellite's air time.",
          image: "/deployment/parachute.png",
          responsible: "ADCS"
        },
        {
          name: "CUBESAT-1U PHASE 1D",
          description: "This CubeSat corresponds to the KLONAS team's primary mission in this project and is the result of collaborative work by all KLONAS team members.",
          image: "/deployment/cubesat-1u.png",
          responsible: "KLONAS Team"
        },
        {
          name: "Research Payload",
          description: "The research payload is our secondary mission, aimed at creating scientific, engineering, and broader impacts. Its objectives include producing publishable research results and laying the foundation for a larger research payload in the next phase.",
          image: "/deployment/research-payload.png",
          responsible: "Payload"
        }
      ]
    },
    {
      title: "Ground Segment",
      items: [
        {
          name: "Yagi-Uda Antenna",
          description: "The Yagi-Uda antenna is used to receive data from the CubeSat via LoRa communication on two frequency bands. The expected maximum range is 10 km.",
          image: "/deployment/yagi-uda.png",
          responsible: "Comms & GS"
        },
        {
          name: "Auto Tracking System",
          description: "Since the Yagi-Uda antenna is directional, precise rotation in both elevation and azimuth angles is required to maintain stable and consistent signal reception. Therefore, an auto-tracking system has been developed for this purpose.",
          image: "/deployment/auto-tracking.png",
          responsible: "Comms & GS, Structure & Thermal"
        },
        {
          name: "Dash Board",
          description: "After the data is received, it is displayed on a dashboard to convert numerical data into easy-to-understand visual information. This improves satellite monitoring and helps identify potential anomalies or errors more effectively.",
          image: "/deployment/dashboard.png",
          responsible: "ADCS, Comms & GS"
        },
        {
          name: "Database Systems",
          description: "Data received from the CubeSat is stored in a dedicated database system. The purpose is to maintain a complete data record throughout the entire flight, enabling verification, traceability, and future data utilization.",
          image: "/deployment/database.png",
          responsible: "Comms & GS"
        }
      ]
    },
    {
      title: "CubeSat Systems",
      items: [
        {
          name: "Frame Structure",
          description: "It serves as the primary structural framework of the CubeSat and must withstand various environmental conditions and vibration loads. It also provides mechanical support and mounting interfaces for the PCBs and others payload.",
          image: "/deployment/frame-structure.png",
          responsible: "Structure & Thermal"
        },
        {
          name: "Solar Panel",
          description: "Designed to recharge the satellite during flight. Although efficiency is limited in this phase, they provide foundational knowledge for future improvements.",
          image: "/deployment/solar-panel.png",
          responsible: "Electrical (Power)"
        },
        {
          name: "PCBs",
          description: "The PCB is a key part of the electronics system and is divided into three types: the Power PCB, which receives energy from the solar panels and distributes power to other boards and devices; the Sensors PCB, which provides GPIO interfaces for various sensors and routes their signals to the Main Board; and the Main Board PCB, which processes incoming data and forwards it to the communication module integrated on the Sensors PCB.",
          image: "/deployment/pcbs.png",
          responsible: "Electrical (PCBs), Comms & GS (Comms Modules), Payload (Env Sensors), OBC & FS (Main Boards WDT), ADCS (IMU & GPS Modules)"
        },
        {
          name: "Flight Software",
          description: "Flight software is responsible for controlling most onboard devices and ensuring they operate according to mission requirements. It executes commands and coordinates subsystem operations based on the needs and requests.",
          image: "/deployment/flight-software.png",
          responsible: "OBC & FS"
        }
      ]
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-burnt-orange/10 border border-burnt-orange/30 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-4">
            Mission Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            System <span className="text-burnt-orange">Overview</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive overview of our CubeSat mission components, from deployment to ground operations
          </p>
        </motion.div>

        {systems.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-burnt-orange rounded-full"></div>
                <h3 className="text-3xl font-bold text-white">
                  {section.title}
                </h3>
              </div>
            </motion.div>

            <div className="space-y-8">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-burnt-orange/50 hover:shadow-lg hover:shadow-burnt-orange/10 transition-all group"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-burnt-orange transition-colors">{item.name}</h4>
                      <p className="text-gray-300 mb-3 leading-relaxed">{item.description}</p>
                      {item.specs && (
                        <p className="text-sm text-burnt-orange mb-3">{item.specs}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">Responsible Units:</span>
                        <span className="text-burnt-orange font-semibold">{item.responsible}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KlonasOverview;

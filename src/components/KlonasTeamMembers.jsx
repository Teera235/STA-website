import { motion } from 'framer-motion';

const KlonasTeamMembers = () => {
  const teamPhotos = [
    { src: "/team/first-meet-1.webp", alt: "KLONAS First Meeting" },
    { src: "/team/first-meet-2.webp", alt: "Team Discussion" },
    { src: "/team/first-meet-3.webp", alt: "Workshop Session" },
    { src: "/team/first-meet-4.webp", alt: "Team Collaboration" },
    { src: "/team/first-meet-5.webp", alt: "Project Planning" },
    { src: "/team/first-meet-6.webp", alt: "Team Building" },
    { src: "/team/kickstart-1.webp", alt: "Project Kickstart" },
    { src: "/team/kickstart-2.webp", alt: "Rocket Model Display" },
    { src: "/team/kickstart-3.webp", alt: "Team Photo" },
    { src: "/team/kickstart-4.webp", alt: "Group Activity" }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-burnt-orange/10 border-2 border-burnt-orange/20 rounded-full text-burnt-orange text-sm font-bold uppercase tracking-wider mb-6">
            Our Team
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Meet the <span className="text-burnt-orange">Team</span>
          </h2>
          <div className="w-32 h-2 bg-burnt-orange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of students working together to advance space technology at KMUTT
          </p>
        </motion.div>

        {/* Team Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-bold">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-black text-gray-900 mb-8">Team Membership Requirements</h3>
            
            <p className="text-gray-700 mb-6 text-lg">To maintain active team membership, all members must meet the following requirements:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">Join the team's <strong className="text-gray-900">Discord server</strong> and provide complete information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">Attend team meetings with <strong className="text-burnt-orange">attendance rate &gt; 50%</strong></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Actively participate</strong> in team tasks and remain consistently active</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">Be a <strong className="text-gray-900">KMUTT student</strong> with no serious violations</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white border-2 border-burnt-orange/20 rounded-2xl">
              <p className="text-sm text-gray-700">
                <strong className="text-burnt-orange">⚠️ Important:</strong> Members not meeting these requirements will be updated to <strong>Inactive Status</strong>, 
                with reduced rights and privileges as team and club members.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-burnt-orange to-orange-600 rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-4">Join KLONAS Today</h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Interested in joining our team? We welcome passionate students who want to contribute to space technology development.
            </p>
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-white text-burnt-orange font-bold rounded-xl uppercase text-sm tracking-wider hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KlonasTeamMembers;

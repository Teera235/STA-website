import { motion } from 'framer-motion';

const KlonasTeamMembers = () => {
  const teamPhotos = [
    { src: "/team/first-meet-1.jpg", alt: "KLONAS First Meeting 1" },
    { src: "/team/first-meet-2.jpg", alt: "KLONAS First Meeting 2" },
    { src: "/team/first-meet-3.jpg", alt: "KLONAS First Meeting 3" },
    { src: "/team/first-meet-4.jpg", alt: "KLONAS First Meeting 4" },
    { src: "/team/first-meet-5.jpg", alt: "KLONAS First Meeting 5" },
    { src: "/team/first-meet-6.jpg", alt: "KLONAS First Meeting 6" },
    { src: "/team/kickstart-1.jpg", alt: "Project Kickstart 1" },
    { src: "/team/kickstart-2.jpg", alt: "Project Kickstart 2" },
    { src: "/team/kickstart-3.jpg", alt: "Project Kickstart 3" },
    { src: "/team/kickstart-4.jpg", alt: "Project Kickstart 4" }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Meet the <span className="text-burnt-orange">Team</span>
          </h2>
          <div className="w-24 h-1 bg-burnt-orange mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our dedicated team of students working together to advance space technology at KMUTT
          </p>
        </motion.div>

        {/* Team Membership Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-burnt-orange mb-6">Team Membership Requirements</h3>
          <p className="text-gray-300 mb-4">To maintain active team membership, all members must meet the following basic requirements:</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Join the team's Discord server and provide complete information, including full name, role/position, and other required details.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Attend team meetings, with an <strong className="text-burnt-orange">attendance rate of more than 50%</strong> of all meetings.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Actively participate in team tasks and remain consistently active.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Be a student of King Mongkut's University of Technology Thonburi (KMUTT) and have no record of serious violations of university regulations.</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-burnt-orange/10 border border-burnt-orange/30 rounded">
            <p className="text-sm text-gray-300">
              <strong className="text-burnt-orange">Note:</strong> If a member does not meet the above requirements, their status will be updated to <strong>Inactive Team Members</strong>. Inactive members will not be counted as official team members when team outputs or achievements are made public, and will have their rights and privileges as both a team member and club member reduced.
            </p>
          </div>
        </motion.div>

        {/* Team Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Team Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-burnt-orange mb-4">Join KLONAS</h3>
            <p className="text-gray-300 mb-6">
              Interested in joining our team? We welcome passionate students who want to contribute to space technology development.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-burnt-orange text-white font-bold rounded uppercase text-sm tracking-wider hover:bg-deep-ember transition-colors"
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

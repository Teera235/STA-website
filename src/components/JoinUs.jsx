import { motion } from 'framer-motion';
import { useState } from 'react';

const JoinUs = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: "PR & Marketing",
      category: "Operations",
      description: "Manage club communications, social media presence, and public relations initiatives",
      skills: ["Content Creation", "Social Media Management", "Graphic Design", "Strategic Communication"],
      majors: ["Communication Arts", "Marketing", "Design", "All Majors"]
    },
    {
      id: 2,
      name: "Management",
      category: "Operations",
      description: "Oversee project planning, resource allocation, timeline management, and team coordination",
      skills: ["Project Management", "Leadership", "Strategic Planning", "Resource Optimization"],
      majors: ["Management", "Engineering", "All Majors"]
    },
    {
      id: 3,
      name: "Documentation",
      category: "Operations",
      description: "Produce technical documentation, competition reports, and research publications",
      skills: ["Technical Writing", "Research", "Documentation Standards", "Quality Assurance"],
      majors: ["Engineering", "Science", "Liberal Arts"]
    },
    {
      id: 4,
      name: "Structures & Flight Dynamics",
      category: "Engineering",
      description: "Design and analyze structural components, aerodynamic performance, and flight trajectories",
      skills: ["CAD Design", "FEA Analysis", "Aerodynamics", "Flight Simulation"],
      majors: ["Mechanical Engineering", "Aerospace Engineering", "Civil Engineering"]
    },
    {
      id: 5,
      name: "Propulsion",
      category: "Engineering",
      description: "Develop rocket propulsion systems, conduct engine testing, and optimize performance",
      skills: ["Thermodynamics", "Fluid Mechanics", "Combustion Analysis", "Test Engineering"],
      majors: ["Mechanical Engineering", "Chemical Engineering", "Aerospace Engineering"]
    },
    {
      id: 6,
      name: "Avionics",
      category: "Engineering",
      description: "Design flight computers, sensor systems, and autonomous control algorithms",
      skills: ["Embedded Systems", "C/C++ Programming", "PCB Design", "Control Theory"],
      majors: ["Computer Engineering", "Electrical Engineering", "Computer Science"]
    },
    {
      id: 7,
      name: "Payload",
      category: "Engineering",
      description: "Develop mission-specific payloads, scientific instruments, and data acquisition systems",
      skills: ["Sensor Integration", "Data Processing", "Electronics Design", "Python Programming"],
      majors: ["Engineering", "Physics", "Computer Science"]
    },
    {
      id: 8,
      name: "Recovery Systems",
      category: "Engineering",
      description: "Design parachute deployment mechanisms, recovery electronics, and landing systems",
      skills: ["Mechanical Design", "Pyrotechnics", "Electronics Integration", "Testing Protocols"],
      majors: ["Mechanical Engineering", "Mechatronics", "Aerospace Engineering"]
    },
    {
      id: 9,
      name: "Ground Station & Telemetry",
      category: "Engineering",
      description: "Build ground control infrastructure, telemetry systems, and communication networks",
      skills: ["RF Engineering", "Network Architecture", "Signal Processing", "Software Development"],
      majors: ["Electrical Engineering", "Telecommunication Engineering", "Computer Engineering"]
    },
    {
      id: 10,
      name: "Safety & Quality",
      category: "Operations",
      description: "Establish safety protocols, conduct risk assessments, and ensure regulatory compliance",
      skills: ["Risk Management", "Safety Standards", "Quality Control", "Regulatory Compliance"],
      majors: ["Engineering", "Safety Engineering", "All Majors"]
    }
  ];

  const categories = ["All", "Engineering", "Operations"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTeams = activeCategory === "All" 
    ? teams 
    : teams.filter(team => team.category === activeCategory);

  return (
    <section id="join" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-space-black mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Build the future of space technology. Work on real engineering projects, 
                compete internationally, and develop professional aerospace experience.
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'bg-burnt-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Team Details - Show at Top */}
        {selectedTeam && (
          <motion.div
            className="mb-8 p-8 bg-white rounded-lg border-2 border-burnt-orange"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="inline-block px-3 py-1 bg-burnt-orange/10 text-burnt-orange text-xs font-bold uppercase tracking-wider rounded mb-4">
                  {filteredTeams.find(t => t.id === selectedTeam)?.category}
                </div>
                <h3 className="text-3xl font-black text-space-black mb-4">
                  {filteredTeams.find(t => t.id === selectedTeam)?.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {filteredTeams.find(t => t.id === selectedTeam)?.description}
                </p>
                
                {/* Close Button */}
                <button 
                  className="text-sm text-burnt-orange font-bold uppercase tracking-wider hover:text-deep-ember flex items-center gap-2"
                  onClick={() => setSelectedTeam(null)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Skills */}
                <div>
                  <p className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-3">
                    Required Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filteredTeams.find(t => t.id === selectedTeam)?.skills.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Majors */}
                <div>
                  <p className="text-xs text-burnt-orange font-bold uppercase tracking-wider mb-3">
                    Preferred Majors
                  </p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {filteredTeams.find(t => t.id === selectedTeam)?.majors.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Teams Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {filteredTeams.map((team, index) => (
            <motion.div
              key={team.id}
              className={`group relative rounded-lg border-2 cursor-pointer transition-all duration-300 bg-white p-6 ${
                selectedTeam === team.id 
                  ? 'border-burnt-orange' 
                  : 'border-gray-200 hover:border-burnt-orange'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setSelectedTeam(team.id)}
            >
              <div className="inline-block px-2 py-1 bg-burnt-orange/10 text-burnt-orange text-[10px] font-bold uppercase tracking-wider rounded mb-3">
                {team.category}
              </div>
              <h3 className="text-base font-bold text-space-black mb-2 group-hover:text-burnt-orange transition-colors">
                {team.name}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                {team.description}
              </p>
              
              {/* Click to expand indicator */}
              <div className="flex items-center gap-1 text-burnt-orange text-xs font-semibold">
                <span>View Details</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application CTA */}
        <motion.div
          className="bg-space-black text-white rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-black mb-4">Ready to Join?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Applications open every semester. No prior experience required—we provide training 
            and mentorship for all team members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-burnt-orange text-white font-bold rounded-lg hover:bg-deep-ember transition-colors inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Open to all KMUTT students • Recruitment: August & January
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default JoinUs;

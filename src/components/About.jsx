import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      
      {/* Hero Image Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src="/about-sta.webp" 
          alt="STA Team"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Building Thailand's<br />Space Future
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              STA is a student-led space technology organization at King Mongkut's University of Technology Thonburi, 
              developing real engineering capability through hands-on satellite and rocket system design, testing, 
              and international competition.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-burnt-orange font-bold uppercase tracking-wider text-sm">Our Mission</span>
              <div className="w-3 h-3 bg-burnt-orange rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-20">
        
        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-space-black mb-6">
              From Rockets to Satellites
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                STA (Space Technology & Astronomy Club) was formed from a group of students at 
                King Mongkut's University of Technology Thonburi who shared a common goal: to develop 
                real engineering capability in space systems through hands-on design, testing, and 
                international competition.
              </p>
              <p>
                The club was initially established to prepare for participation in the 
                <span className="text-burnt-orange font-semibold"> Spaceport America Cup</span>, 
                the world's largest intercollegiate rocket engineering competition held in New Mexico, USA. 
                The competition provided a practical platform for members to work under real engineering 
                constraints, including system integration, safety requirements, and flight readiness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As the team gained experience, STA's focus expanded beyond launch vehicles toward 
                <span className="text-burnt-orange font-semibold"> satellite and space system development</span>. 
                The club now emphasizes end-to-end space engineering, covering satellite subsystem design, 
                avionics, communication systems, attitude determination and control, payload integration, 
                and mission planning.
              </p>
              <p>
                Rocket development remains an essential component as a launch platform, but 
                <span className="text-space-black font-semibold"> CubeSat engineering has become the core direction</span> of the team.
              </p>
              <p>
                STA operates as a multidisciplinary engineering organization, where members apply theoretical 
                knowledge to real-world space projects, collaborate across subsystems, and develop solutions 
                aligned with professional aerospace standards.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;

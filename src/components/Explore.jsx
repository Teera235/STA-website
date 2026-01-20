import { motion } from 'framer-motion';

const Explore = () => {
  const exploreItems = [
    {
      title: "CubeSat Systems",
      image: "/explore-cubesat.webp",
      link: "#cubesat"
    },
    {
      title: "Ground Station & GIS",
      image: "/explore-gis.webp",
      link: "#gis"
    },
    {
      title: "Research & Testing",
      image: "/explore-research.webp",
      link: "#research"
    },
    {
      title: "Rocket Engineering",
      image: "/explore-rocket.webp",
      link: "#rocket"
    }
  ];

  return (
    <section className="relative bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="mb-12 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-5xl font-black text-space-black">
              Explore STA
            </h2>
          </div>
          <a href="#all" className="hidden md:flex items-center gap-2 text-space-black font-bold hover:text-burnt-orange transition-colors">
            <span>Discover More</span>
            <div className="w-3 h-3 bg-burnt-orange rounded-full"></div>
          </a>
        </motion.div>

        {/* Explore Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group relative overflow-hidden bg-black aspect-[3/4] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black text-white mb-2 group-hover:underline">
                  {item.title}
                </h3>
                
                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-burnt-orange">
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Explore;

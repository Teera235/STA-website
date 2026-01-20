import { motion } from 'framer-motion';

const Projects = () => {
  const mainFeature = {
    title: "Spaceport America Cup 2025",
    category: "COMPETITION",
    image: "/project-spaceport.webp",
    description: "Competing in the world's largest intercollegiate rocket engineering competition with 30,000 feet apogee target in New Mexico, USA",
    readTime: "1 MIN READ",
    badge: "NEWS RELEASE"
  };

  const mediumFeature = {
    title: "School Satellite Competition 2024",
    category: "CUBESAT",
    image: "/project-cubesat.webp",
    readTime: "3 MIN READ",
    badge: "NEWS RELEASE"
  };

  const smallFeatures = [
    {
      title: "Rocket Test Stand Development",
      category: "TESTING",
      image: "/project-teststand.webp",
      readTime: "2 MIN READ",
      badge: "BLOG"
    },
    {
      title: "IAAI International Conference",
      category: "RESEARCH",
      image: "/project-iaai.webp",
      readTime: "2 MIN READ",
      badge: "BLOG"
    }
  ];

  const recentArticles = [
    {
      title: "DekDTcas Open House",
      description: "Showcasing space technology to high school students",
      readTime: "2 MIN READ",
      image: "/event-dekdtcas.webp"
    },
    {
      title: "KMUTT Open House 2024",
      description: "Interactive rocket and satellite demonstrations",
      readTime: "3 MIN READ",
      image: "/event-openworld.webp"
    },
    {
      title: "KMUTT Open House 2025",
      description: "Latest space technology showcase and recruitment",
      readTime: "2 MIN READ",
      image: "/event-openhouse2025.webp"
    },
    {
      title: "STA x EASA Collaboration",
      description: "Joint rocket propulsion testing event",
      readTime: "3 MIN READ",
      image: "/event-easa.webp"
    }
  ];

  return (
    <section id="projects" className="relative bg-white py-20">
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
              Featured News
            </h2>
          </div>
          <a href="#all" className="hidden md:flex items-center gap-2 text-space-black font-bold hover:text-burnt-orange transition-colors">
            <span>Recently Published</span>
            <div className="w-3 h-3 bg-burnt-orange rounded-full"></div>
          </a>
        </motion.div>

        {/* Featured Projects - NASA Layout: 1 Large + 1 Medium + 2 Small */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          
          {/* Left - Main Large Feature */}
          <div className="lg:col-span-5">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                <img 
                  src={mainFeature.image} 
                  alt={mainFeature.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {mainFeature.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                    {mainFeature.readTime}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:underline">
                    {mainFeature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {mainFeature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle - Medium Feature */}
          <div className="lg:col-span-4">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                <img 
                  src={mediumFeature.image} 
                  alt={mediumFeature.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {mediumFeature.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                    {mediumFeature.readTime}
                  </p>
                  <h3 className="text-xl font-black text-white group-hover:underline">
                    {mediumFeature.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - 2 Small Features Stacked */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-4">
            {smallFeatures.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden cursor-pointer bg-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              >
                <div className="relative h-[190px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {project.badge}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                      {project.readTime}
                    </p>
                    <h3 className="text-base font-black text-white group-hover:underline">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Articles - 4 Circular Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentArticles.map((article, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer flex gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Circular Image */}
              <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  {article.readTime}
                </p>
                <h4 className="font-bold text-space-black text-sm mb-1 group-hover:text-burnt-orange transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">ARTICLE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

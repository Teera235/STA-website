import { motion } from 'framer-motion';
import { useState } from 'react';

const CubeSatSystems = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cubeSatImages = [
    { id: 1, src: '/cubesat-system/1.jpg', alt: 'CubeSat Size Comparison', caption: 'Real-life size comparison of CubeSat units' },
    { id: 2, src: '/cubesat-system/2.jpg', alt: 'CubeSat Units', caption: 'Different CubeSat configurations from 1U to 16U' },
    { id: 3, src: '/cubesat-system/3.jpg', alt: 'CubeSat vs Microsatellite', caption: 'Comparison between CubeSat and microsatellite' },
    { id: 4, src: '/cubesat-system/4.jpg', alt: 'CubeSat Components', caption: 'Internal components of a CubeSat' },
    { id: 5, src: '/cubesat-system/5.jpg', alt: 'CubeSat Bus Architecture', caption: 'Exploded view of satellite bus structure' },
    { id: 6, src: '/cubesat-system/6.jpg', alt: 'CubeSat Payload', caption: 'High-resolution optical payload system' },
    { id: 7, src: '/cubesat-system/7.jpg', alt: 'CubeSat Applications', caption: 'Various applications of CubeSat technology' },
    { id: 8, src: '/cubesat-system/8.jpg', alt: 'CubeSat Deployment', caption: 'CubeSat deployment from ISS' },
    { id: 9, src: '/cubesat-system/9.jpg', alt: 'CubeSat Mission', caption: 'CubeSat in orbit mission' }
  ];

  return (
    <article className="relative bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-space-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cubesat-system/1.jpg" 
            alt="CubeSat Systems"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black"></div>
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col justify-center pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-burnt-orange text-white text-xs font-bold uppercase tracking-wider rounded">BLOG</span>
              <span className="text-gray-400 text-sm">October 3, 2023</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              CubeSat 101: The Comprehensive Guide to Understanding Satellite Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Did you know that the race for space innovation is now being led not just by giant satellites, 
              but by tiny cube-shaped devices barely larger than a coffee mug?
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>By STA Team</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span className="text-burnt-orange font-semibold">Technology</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Introduction</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A CubeSat, often referred to as a nanosatellite, in its simplest form, is a compact, standardized 
            satellite used primarily in Low Earth Orbit. As space exploration propels itself to the forefront 
            of modern technological advancements, understanding the relevance of these mini marvels becomes 
            ever more paramount.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Did you know, for instance, that the launch rate of CubeSats has increased by more than tenfold 
            in the past decade? Enter the world of CubeSats and learn what is a CubeSat and how they are used.
          </p>
        </motion.section>

        {/* Featured Image 1 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(cubeSatImages[0])}
          >
            <img 
              src={cubeSatImages[0].src} 
              alt={cubeSatImages[0].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {cubeSatImages[0].caption}
          </figcaption>
        </motion.figure>

        {/* What is a CubeSat */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">What is a CubeSat? A Simple Definition</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Think of a Rubik's cube. Now, imagine that cube equipped with state-of-the-art technology, ready 
            for outer space. That's a CubeSat for you. These miniature satellites are categorized by their size, 
            using a unit designation ranging from 1U (one unit) to as large as 16U.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            One of these can weigh anywhere between 1.33 kilograms to over 30 kilograms, challenging the notion 
            that "bigger is always better."
          </p>
          
          <div className="bg-gray-50 border-l-4 border-burnt-orange p-6 rounded-r-lg">
            <p className="text-burnt-orange font-bold mb-2 text-sm uppercase tracking-wider">Quick Fact</p>
            <p className="text-gray-700">
              A standard 1U CubeSat measures exactly 10×10×10 centimeters — about the size of a Rubik's cube!
            </p>
          </div>
        </motion.section>

        {/* Featured Image 2 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(cubeSatImages[1])}
          >
            <img 
              src={cubeSatImages[1].src} 
              alt={cubeSatImages[1].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {cubeSatImages[1].caption}
          </figcaption>
        </motion.figure>

        {/* CubeSat vs Microsatellite */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-space-black mb-4">What is NOT a CubeSat?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Their larger siblings, called microsatellites, can often be mistaken for CubeSats due to their 
            similar square appearance. The main things to look for in a microsatellite are its physical size, 
            deployment ring, or any instruments protruding from its frame.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Since CubeSats go to space on launch vehicles housed in deployment pods, their dimensions are 
            strictly defined by the deployer pod walls. Microsatellites, however, are attached to rockets 
            via separation rings without encapsulation, allowing their instruments to protrude outside the 
            satellite's frame.
          </p>
        </motion.section>

        {/* Featured Image 3 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(cubeSatImages[2])}
          >
            <img 
              src={cubeSatImages[2].src} 
              alt={cubeSatImages[2].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {cubeSatImages[2].caption}
          </figcaption>
        </motion.figure>

        {/* Evolution */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">The Evolution of CubeSats</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            From inception to space revolution: The journey of CubeSats began in the late 1990s with California 
            Polytechnic State University and Stanford University professors looking to develop a standard framework 
            for students to quickly and reliably launch their projects into space.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Initiated as an educational endeavor, it soon turned into a revolution, democratizing space for 
            professionals and hobbyists alike. Over the years, institutions like NASA, Planet Labs, NanoAvionics, 
            and others worldwide have played pivotal roles in advancing CubeSat technology, turning them into 
            indispensable tools for commercial space exploration and scientific research.
          </p>

          <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-space-black mb-6 uppercase tracking-wider">Timeline</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block px-3 py-1 bg-burnt-orange text-white text-sm font-bold rounded">Late 1990s</span>
                </div>
                <p className="text-gray-700">
                  California Polytechnic State University and Stanford University developed the CubeSat standard 
                  framework for educational space missions.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block px-3 py-1 bg-burnt-orange text-white text-sm font-bold rounded">2000s</span>
                </div>
                <p className="text-gray-700">
                  Educational endeavor transformed into a revolution, democratizing space access for professionals 
                  and hobbyists worldwide.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block px-3 py-1 bg-burnt-orange text-white text-sm font-bold rounded">Present</span>
                </div>
                <p className="text-gray-700">
                  Launch rates increased tenfold. NASA, Planet Labs, and global institutions advance CubeSat 
                  technology for commercial and scientific applications.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Anatomy */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Diving Deep: The Technical Anatomy of a CubeSat</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            To understand a spacecraft's design and function, knowing the distinction between a satellite bus 
            and a payload is fundamental. A standard 1U CubeSat measures 10×10×10 centimeters. However, nowadays, 
            most nanosatellites are 6U and larger due to decreased launch costs, more sophisticated payload 
            instruments, and missions.
          </p>

          {/* Featured Image 4 */}
          <figure className="mb-8">
            <div 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(cubeSatImages[4])}
            >
              <img 
                src={cubeSatImages[4].src} 
                alt={cubeSatImages[4].alt}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
              {cubeSatImages[4].caption}
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Satellite Bus
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                The foundational support structure and subsystems containing standard equipment required to keep 
                the satellite operational:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Power Systems:</strong> Solar panels and batteries for energy supply and storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Thermal Control:</strong> Systems to manage temperature within required ranges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Propulsion:</strong> For orbit and attitude adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Communication:</strong> Transmitters and receivers for Earth contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Structural System:</strong> Physical framework holding everything in place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Onboard Computer:</strong> Microcontrollers for operations and data processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Attitude Control:</strong> Sensors and actuators for orientation adjustment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Payload
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                The primary mission equipment or the reason the satellite is in space:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Scientific Instruments:</strong> For monitoring Earth's climate, cosmic phenomena, 
                  or interplanetary exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Communication Equipment:</strong> For telecommunications satellites to relay TV, 
                  internet, radio, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Telescopes:</strong> To observe distant celestial bodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Cameras:</strong> For reconnaissance or Earth observation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Other Specialized Equipment:</strong> Depending on the specific mission or purpose</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-800 leading-relaxed">
              <strong>In a nutshell:</strong> The satellite bus ensures the spacecraft can function and survive 
              in the challenging environment of space, while the payload carries out the specific tasks or missions 
              the spacecraft is designed for. It's a harmonious blend of standardized systems and mission-specific 
              equipment working together to achieve objectives in space.
            </p>
          </div>
        </motion.section>

        {/* Featured Image 5 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(cubeSatImages[5])}
          >
            <img 
              src={cubeSatImages[5].src} 
              alt={cubeSatImages[5].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {cubeSatImages[5].caption}
          </figcaption>
        </motion.figure>

        {/* Comparing CubeSats */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Comparing CubeSats and Traditional Satellites</span>
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-space-black mb-3">Size, Scalability, and Advantages</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                While CubeSats are dwarfed by traditional satellites, their modular design makes them incredibly 
                scalable. This scalability offers versatility in applications, from Earth monitoring to communication 
                services and advanced scientific experiments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-space-black mb-3">Cost Implications and Deployment Ease</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Traditional satellites come with a hefty price tag, while CubeSats, due to their size and 
                standardized design, significantly cut down both developmental and launch costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-space-black mb-3">Performance Capabilities and Constraints</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                While CubeSats are technologically adept, their compact size does place certain limitations, 
                particularly when it comes to power storage and the complexity of onboard instruments, which 
                often leads to more performance tradeoffs in more advanced missions compared to microsatellites.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Practical Uses */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Practical Uses of CubeSats in Today's World</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Scientific Research</h3>
              <p className="text-gray-700 text-sm">
                From finding tiny black holes in our galaxy to testing novel space technologies, CubeSats are 
                at the forefront of scientific innovation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Earth Monitoring</h3>
              <p className="text-gray-700 text-sm">
                These mini marvels have proven invaluable in monitoring environmental changes, crop yields, 
                natural disasters, and more, providing crucial data in near real-time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Communications</h3>
              <p className="text-gray-700 text-sm">
                CubeSats have paved the way for improved communication networks and are often used as test beds 
                for pioneering space technologies such as space-based 5G Internet of Things networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Defense & Security</h3>
              <p className="text-gray-700 text-sm">
                With their ability to be rapidly developed and deployed, CubeSats offer strategic advantages 
                in defense and surveillance applications.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-burnt-orange p-6 rounded-r-lg">
            <p className="text-burnt-orange font-bold mb-2 text-sm uppercase tracking-wider">Real-World Example</p>
            <p className="text-gray-700 text-sm">
              Constellr is developing the world's first globally scalable water stress monitoring system for 
              agriculture. Currently, more than 70% of freshwater is used for agriculture and 60% of that goes 
              to waste. CubeSats are helping solve this critical problem.
            </p>
          </div>
        </motion.section>

        {/* Featured Image 6 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(cubeSatImages[7])}
          >
            <img 
              src={cubeSatImages[7].src} 
              alt={cubeSatImages[7].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {cubeSatImages[7].caption}
          </figcaption>
        </motion.figure>

        {/* Cost Analysis */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">The Price of a CubeSat</span>
          </h2>
          
          <div className="bg-white rounded-lg p-8 mb-6 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-space-black mb-4">How much do CubeSat missions cost?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When we talk about space missions, astronomical sums of money often come to mind. However, CubeSat 
              missions challenge this notion. The cost of a CubeSat can vary dramatically based on its complexity, 
              the mission's objectives, and the technology embedded within it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-burnt-orange transition-colors">
                <p className="text-burnt-orange font-bold text-2xl mb-2">$50K - $150K</p>
                <p className="text-gray-700 text-sm">Simple CubeSat for educational purposes</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-burnt-orange transition-colors">
                <p className="text-burnt-orange font-bold text-2xl mb-2">$500K - Few Million</p>
                <p className="text-gray-700 text-sm">Sophisticated CubeSat for research or commercial purposes</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-space-black mb-4">How do their costs compare to large space missions?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In space exploration, where billion-dollar budgets are commonplace, CubeSats offer a breath of fresh 
              fiscal air. With their behemoth structures, extensive instruments, and unique launch requirements, 
              traditional satellite missions can run up bills from hundreds of millions to several billion dollars.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Comparing the two, CubeSats represent a tiny fraction of the cost of these large-scale missions. 
              For instance, a comprehensive interplanetary mission could have a budget equivalent to launching 
              hundreds or even thousands of CubeSats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              However, it's crucial to balance the scales of comparison. While CubeSats offer cost savings, they 
              might not always match the extensive capabilities, longevity, and range of more sizeable missions. 
              Yet, their affordability makes them invaluable for frequent, targeted projects and provides an 
              excellent platform for testing novel space technologies without breaking the bank.
            </p>
          </div>
        </motion.section>

        {/* Advantages and Disadvantages */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Advantages and Disadvantages of CubeSats</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-400">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-space-black text-2xl">+</span>
                Advantages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Cost-Effective:</strong> Significantly lower development and launch costs compared 
                  to traditional satellites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Rapid Development:</strong> Short development cycles enable quick deployment and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Accessible:</strong> Excellent option for commercial, civil, and governmental entities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Rideshare Options:</strong> Can launch as secondary payloads, reducing costs further</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Standardized Architecture:</strong> Proven designs and components reduce risk</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-400">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-space-black text-2xl">−</span>
                Disadvantages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Limited Payload Capacity:</strong> Confined size restricts instrument complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Shorter Lifetimes:</strong> Typically have shorter operational lifetimes in low orbits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Performance Tradeoffs:</strong> More compromises needed in advanced missions vs microsatellites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Power Constraints:</strong> Limited space for solar panels and batteries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-space-black mt-1 font-bold">•</span>
                  <span><strong>Space Debris Concerns:</strong> Growing numbers require sustainable practices</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Future Outlook */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Peeking into the Future: CubeSats in Upcoming Space Missions</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As technology advances and space becomes more accessible, CubeSats are poised to play an even more 
            significant role in space exploration and Earth observation. Here's what to watch for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Noteworthy Missions</h3>
              <p className="text-gray-700 text-sm">
                Projects like LANL's MAMBO, which aims to make the best-ever measurement of the cosmic diffuse 
                gamma-ray (CDG) background, spotlight the evolving role of CubeSats in space missions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Technological Breakthroughs</h3>
              <p className="text-gray-700 text-sm">
                As technology advances, expect CubeSats to house more sophisticated instruments, enabling even 
                more groundbreaking research and capabilities such as quantum communication.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Commercial Applications</h3>
              <p className="text-gray-700 text-sm">
                With affordable access to space, startups all over the world are coming up with novel ideas to 
                utilize CubeSats to improve life on Earth through emission monitoring, environmental preservation, 
                food security, and other services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Open-Source Projects</h3>
              <p className="text-gray-700 text-sm">
                The democratization of space technology means a surge in community-led CubeSat projects, fostering 
                innovation and information democratization at an unprecedented scale.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-burnt-orange p-6 rounded-r-lg">
            <p className="text-burnt-orange font-bold mb-2 text-sm uppercase tracking-wider">Democratizing Space</p>
            <p className="text-gray-700 text-sm">
              Companies like Sen are trying to democratize space by providing 4K videos of Earth from orbit free 
              of charge to the public, making space observation accessible to everyone.
            </p>
          </div>
        </motion.section>

        {/* Challenges */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Overcoming Challenges in CubeSat Deployment</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">CubeSat Destinations</h3>
              <p className="text-gray-700">
                While most CubeSats operate in Earth's orbit, ambitious projects are looking further — to the Moon, 
                other planets, and even asteroids.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Technical Hurdles</h3>
              <p className="text-gray-700">
                As CubeSats venture further from home, challenges like long-distance communication and robustness 
                against harsh space environments come into play.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Regulatory Landscapes</h3>
              <p className="text-gray-700">
                As the number of CubeSats in space grows, so does the need for clear regulatory frameworks to 
                ensure safe and efficient operations, minimizing risk of collisions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Environmental Concerns</h3>
              <p className="text-gray-700">
                With increased deployments come concerns about space debris. Addressing these environmental issues 
                is crucial for the sustainable growth of CubeSat technology.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg p-8 border-2 border-gray-300">
            <h2 className="text-3xl font-black text-space-black mb-4">Conclusion</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From their humble educational beginnings to leading the charge in space exploration and research, 
              CubeSats have truly revolutionized our approach to space technology. Their significance in sculpting 
              the future of space tech cannot be overstated.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These miniature satellites have democratized access to space, enabling universities, startups, and 
              research institutions worldwide to participate in space exploration. As technology continues to 
              advance and costs decrease, CubeSats will play an increasingly vital role in scientific discovery, 
              Earth observation, and commercial space applications.
            </p>
            <p className="text-gray-700 font-semibold">
              The universe awaits, and CubeSats are leading the way.
            </p>
          </div>
        </motion.section>

        {/* Share Section */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Published on October 3, 2023</p>
              <p className="text-sm text-gray-600">By STA Team</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Share:</span>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 hover:bg-burnt-orange hover:text-white rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 hover:bg-burnt-orange hover:text-white rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 hover:bg-burnt-orange hover:text-white rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-6xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-burnt-orange transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-semibold mb-1">{selectedImage.alt}</p>
              <p className="text-gray-400 text-sm">{selectedImage.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </article>
  );
};

export default CubeSatSystems;

import { motion } from 'framer-motion';
import { useState } from 'react';

const GroundStationGIS = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const gisImages = [
    { id: 1, src: '/gis/1.webp', alt: 'Ground Station Overview', caption: 'Modern ground station infrastructure' },
    { id: 2, src: '/gis/2.webp', alt: 'GIS Mapping', caption: 'Geographic Information System mapping' },
    { id: 3, src: '/gis/3.webp', alt: 'Satellite Communication', caption: 'Ground-to-satellite communication systems' },
    { id: 4, src: '/gis/4.webp', alt: 'Data Processing', caption: 'Real-time data processing and analysis' },
    { id: 5, src: '/gis/5.webp', alt: 'Antenna Systems', caption: 'High-gain antenna systems for satellite tracking' },
    { id: 6, src: '/gis/6.webp', alt: 'Control Center', caption: 'Mission control and monitoring center' },
    { id: 7, src: '/gis/7.webp', alt: 'Network Infrastructure', caption: 'Global ground station network' },
    { id: 8, src: '/gis/8.webp', alt: 'Telemetry Data', caption: 'Telemetry, tracking, and command systems' },
    { id: 9, src: '/gis/9.webp', alt: 'Earth Observation', caption: 'Earth observation and monitoring' },
    { id: 10, src: '/gis/10.webp', alt: 'GIS Analysis', caption: 'Advanced GIS analysis tools' },
    { id: 11, src: '/gis/11.webp', alt: 'Remote Sensing', caption: 'Remote sensing data collection' },
    { id: 12, src: '/gis/12.webp', alt: 'Data Visualization', caption: 'Spatial data visualization' },
    { id: 13, src: '/gis/13.webp', alt: 'Ground Equipment', caption: 'Ground station equipment and hardware' },
    { id: 14, src: '/gis/14.webp', alt: 'Signal Processing', caption: 'RF signal processing systems' },
    { id: 15, src: '/gis/15.webp', alt: 'Tracking Systems', caption: 'Automated satellite tracking' }
  ];

  return (
    <article className="relative bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-space-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/gis/1.webp" 
            alt="Ground Station & GIS"
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
              <span className="text-gray-400 text-sm">January 21, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Ground Station & GIS: The Critical Link Between Space and Earth
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Discover how ground stations and Geographic Information Systems form the backbone of satellite 
              communications, enabling real-time data collection and analysis from space.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>By STA Team</span>
              <span>•</span>
              <span>12 min read</span>
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
            The ground segment is a critical part of the end-to-end science data return, and it includes all 
            the ground-based elements that are used to collect and disseminate information from the satellite 
            to the user. Without ground stations, satellites would be unable to communicate their valuable data 
            back to Earth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Combined with Geographic Information Systems (GIS), ground stations enable us to transform raw 
            satellite data into actionable intelligence for applications ranging from environmental monitoring 
            to disaster response and urban planning.
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
            onClick={() => setSelectedImage(gisImages[0])}
          >
            <img 
              src={gisImages[0].src} 
              alt={gisImages[0].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[0].caption}
          </figcaption>
        </motion.figure>

        {/* What is a Ground Station */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">What is a Ground Station?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A ground station is a terrestrial radio station designed for extraplanetary telecommunication with 
            spacecraft. It consists of antennas, receivers, transmitters, and associated equipment used to 
            communicate with satellites and spacecraft in orbit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ground stations perform critical functions including telemetry (receiving data from satellites), 
            tracking (monitoring satellite position), and command (sending instructions to satellites). These 
            three functions are collectively known as TT&C.
          </p>
          
          <div className="bg-gray-50 border-l-4 border-burnt-orange p-6 rounded-r-lg">
            <p className="text-burnt-orange font-bold mb-2 text-sm uppercase tracking-wider">Key Functions</p>
            <p className="text-gray-700">
              Ground stations enable bidirectional communication with satellites, receiving scientific data 
              and sending operational commands to ensure mission success.
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
            onClick={() => setSelectedImage(gisImages[1])}
          >
            <img 
              src={gisImages[1].src} 
              alt={gisImages[1].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[1].caption}
          </figcaption>
        </motion.figure>

        {/* Ground Station Components */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Primary Elements of a Ground System</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Ground Stations
              </h3>
              <p className="text-gray-700 text-sm">
                Telemetry, tracking, and command interface with the spacecraft. These facilities house the 
                antennas and equipment necessary for satellite communication.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Ground Networks
              </h3>
              <p className="text-gray-700 text-sm">
                Connection between multiple ground elements, enabling data transfer and coordination across 
                global ground station networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Control Centers
              </h3>
              <p className="text-gray-700 text-sm">
                Management of spacecraft operations, including mission planning, command generation, and 
                real-time monitoring of satellite health and status.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-xl font-bold text-space-black mb-4 flex items-center gap-2">
                <span className="text-2xl text-burnt-orange">→</span>
                Remote Terminals
              </h3>
              <p className="text-gray-700 text-sm">
                User interface to retrieve transmitted information for additional processing, analysis, and 
                distribution to end users and stakeholders.
              </p>
            </div>
          </div>
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
            onClick={() => setSelectedImage(gisImages[2])}
          >
            <img 
              src={gisImages[2].src} 
              alt={gisImages[2].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[2].caption}
          </figcaption>
        </motion.figure>

        {/* Frequency Bands */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">Frequency Considerations</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The spacecraft transceiver and ground station need to be on a coordinated frequency to communicate. 
            Selecting transmit and receive frequencies are a critical part of the spacecraft communications 
            system design process.
          </p>

          <div className="bg-white rounded-lg p-6 border-2 border-gray-300 mb-6">
            <h3 className="text-xl font-bold text-space-black mb-4">Common Frequency Bands</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="font-bold text-burnt-orange text-lg">UHF</p>
                <p className="text-sm text-gray-600">300-1000 MHz</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="font-bold text-burnt-orange text-lg">S-Band</p>
                <p className="text-sm text-gray-600">2-4 GHz</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="font-bold text-burnt-orange text-lg">X-Band</p>
                <p className="text-sm text-gray-600">8-12 GHz</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded">
                <p className="font-bold text-burnt-orange text-lg">Ka-Band</p>
                <p className="text-sm text-gray-600">27-40 GHz</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Higher frequencies provide wider bandwidths and enable higher data rates, but require more stringent 
            pointing accuracy. The choice of frequency band depends on mission requirements, data volume, and 
            available ground infrastructure.
          </p>
        </motion.section>

        {/* Featured Image 4 */}
        <motion.figure
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(gisImages[3])}
          >
            <img 
              src={gisImages[3].src} 
              alt={gisImages[3].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[3].caption}
          </figcaption>
        </motion.figure>

        {/* GIS Integration */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Geographic Information Systems (GIS)</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GIS technology integrates with ground station data to create powerful tools for spatial analysis 
            and visualization. By combining satellite imagery and telemetry data with geographic coordinates, 
            GIS enables comprehensive Earth observation and monitoring capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Data Collection</h3>
              <p className="text-gray-700 text-sm">
                Ground stations receive raw satellite data including imagery, sensor readings, and telemetry 
                information that forms the foundation of GIS analysis.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Processing & Analysis</h3>
              <p className="text-gray-700 text-sm">
                Advanced algorithms process satellite data to extract meaningful information, perform spatial 
                analysis, and generate actionable intelligence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Visualization</h3>
              <p className="text-gray-700 text-sm">
                GIS platforms transform complex satellite data into intuitive maps, charts, and 3D visualizations 
                that enable better decision-making.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-3 uppercase tracking-wider text-sm">Applications</h3>
              <p className="text-gray-700 text-sm">
                From environmental monitoring to urban planning, disaster response to agriculture, GIS-enabled 
                satellite data serves countless real-world applications.
              </p>
            </div>
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
            onClick={() => setSelectedImage(gisImages[4])}
          >
            <img 
              src={gisImages[4].src} 
              alt={gisImages[4].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[4].caption}
          </figcaption>
        </motion.figure>

        {/* Ground Station Networks */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">Global Ground Station Networks</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Modern satellite operations rely on networks of ground stations distributed around the globe. 
            This geographic diversity ensures continuous communication coverage as satellites orbit the Earth.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">NASA Near Space Network (NSN)</h3>
              <p className="text-gray-700 text-sm">
                Provides Direct-to-Earth services via a global system of commercial and NASA-owned ground stations 
                supporting missions from low-Earth orbit to Sun-Earth Lagrange Points.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Deep Space Network (DSN)</h3>
              <p className="text-gray-700 text-sm">
                Optimized for telecommunications with missions in GEO, lunar distances, and beyond, including 
                interplanetary missions and deep space exploration.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Commercial Networks</h3>
              <p className="text-gray-700 text-sm">
                Companies like KSAT, AWS Ground Station, and Viasat provide commercial ground station services, 
                democratizing access to satellite communications.
              </p>
            </div>
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
            onClick={() => setSelectedImage(gisImages[5])}
          >
            <img 
              src={gisImages[5].src} 
              alt={gisImages[5].alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            {gisImages[5].caption}
          </figcaption>
        </motion.figure>

        {/* Applications */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Real-World Applications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Environmental Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Track climate change, deforestation, ocean health, and atmospheric conditions using satellite 
                data processed through GIS platforms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Disaster Response</h3>
              <p className="text-gray-700 text-sm">
                Rapid assessment of natural disasters including floods, earthquakes, and wildfires enables 
                faster emergency response and resource allocation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Agriculture</h3>
              <p className="text-gray-700 text-sm">
                Precision agriculture uses satellite imagery to monitor crop health, optimize irrigation, 
                and improve yield predictions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Urban Planning</h3>
              <p className="text-gray-700 text-sm">
                City planners use GIS data to analyze urban growth, plan infrastructure, and optimize 
                transportation networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Resource Management</h3>
              <p className="text-gray-700 text-sm">
                Monitor and manage natural resources including water, forests, and minerals using comprehensive 
                satellite-based GIS analysis.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 hover:border-burnt-orange transition-colors">
              <h3 className="text-lg font-bold text-space-black mb-2 uppercase tracking-wider text-sm">Navigation</h3>
              <p className="text-gray-700 text-sm">
                GPS and GNSS systems rely on ground stations for precise positioning, timing, and navigation 
                services worldwide.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Future Technologies */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-space-black mb-6">
            <span className="border-l-4 border-burnt-orange pl-4">Future Technologies</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-space-black mb-3">Optical Communications</h3>
              <p className="text-gray-700 leading-relaxed">
                Free Space Optical (FSO) communications are expected to increase data rates by two orders of 
                magnitude over traditional RF links. Laser-based systems offer the potential for orders of 
                magnitude improvement in data throughput, enabling unprecedented data collection capabilities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-space-black mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                Machine learning and artificial intelligence are revolutionizing GIS data processing, enabling 
                automated feature detection, pattern recognition, and predictive analytics at unprecedented scales.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-space-black mb-3">Cloud-Based Processing</h3>
              <p className="text-gray-700 leading-relaxed">
                Ground Station as a Service (GSaaS) platforms like AWS Ground Station enable scalable, on-demand 
                satellite communications without the need to build and maintain physical infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-space-black mb-3">Automated Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                "Lights-out" operations with fully automated ground stations reduce operational costs and enable 
                24/7 satellite communications with minimal human intervention.
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
              Ground stations and GIS technology form the critical link between space-based assets and terrestrial 
              applications. As satellite technology continues to advance, the importance of robust ground infrastructure 
              and sophisticated data processing capabilities only grows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ground segment serves as the gateway to getting valuable data collected by satellites into the 
              hands of users who can transform it into actionable intelligence. From environmental monitoring to 
              disaster response, from agriculture to urban planning, the combination of ground stations and GIS 
              enables us to better understand and manage our planet.
            </p>
            <p className="text-gray-700 font-semibold">
              The future of Earth observation depends on the continued evolution of ground segment technology.
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
              <p className="text-sm text-gray-600 mb-1">Published on January 21, 2026</p>
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

export default GroundStationGIS;

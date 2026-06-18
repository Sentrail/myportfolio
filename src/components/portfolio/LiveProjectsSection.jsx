import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function LiveProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);
  const [projectOpenedFromAllProjectsModal, setProjectOpenedFromAllProjectsModal] = useState(false);

  const projects = [
 /*   {
      id: 6,
      title: 'Personal Fitness Tracker',
      description: 'Health and workout monitoring application',
      longDescription: 'A comprehensive fitness tracking application for monitoring workouts, nutrition, and progress. Features include workout logging, exercise library with animations, nutrition tracking, progress charts, and goal setting. Integrates with fitness APIs for extended functionality.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firestore(Firebase)', 'Chart.js'],
      liveUrl: 'https://fitness-tracker-cdc8eygnh-yusuf-israels-projects.vercel.app/',
      githubUrl: '#https://github.com/Sentrail/fitness_tracker',
    },
    {
      id: 7,
      title: 'Event Ticketing Website',
      description: 'Event Ticketing and Monitoring website',
      longDescription: 'A comprehensive ticketing application for monitoring tickets sales.',
      image: '/img/ticket.jpeg',
      tags: ['HTML', 'Javscript', 'CSS', 'Paystack'],
      liveUrl: 'https://sentrail.github.io/Event_Ticketing_Website/',
      githubUrl: 'https://github.com/Sentrail/Event_Ticketing_Website',
    },
    {
      id: 8,
      title: 'Farming Website',
      description: 'Farm Produce/Products displaying website',
      longDescription: 'A powerful and comprehensive application for displaying of farm produce.',
      image: '/img/farm.avif',
      tags: ['Javscript', 'HTML', 'CSS', 'Paystack'],
      liveUrl: 'https://sentrail.github.io/Sunrise_Acre_Farm/',
      githubUrl: 'https://github.com/Sentrail/Sunrise_Acre_Farm',
    },
    {
      id: 9,
      title: 'Photography Portfolio Website',
      description: 'Photography Portfolio displaying website',
      longDescription: 'An intuitive photography portfolio for displaying of shoots.',
      image: '/img/photography.avif',
      tags: ['Javscript', 'CSS', 'HTML'],
      liveUrl: 'https://sentrail.github.io/Photography_Portfolio_Website/',
      githubUrl: 'https://github.com/Sentrail/Photography_Portfolio_Website',
    },
    {
      id: 11,
      title: 'Andys Grill Website',
      description: 'The heart of Agege nightlife. We serve premium smoked meats, grilled specials, and chilled drinks around the clock.',
      longDescription: 'Andy\'s Smoke House & Grill is a premier destination for those who crave the real taste of smoke. Located in the vibrant LSDPC complex at Pen Cinema, we bridge the gap between quality casual dining and the exciting energy of Lagos nightlife.',
      image: '/img/grill_1.jpeg',
      tags: ['Javscript', 'Tailwind CSS', 'PHP', 'HTML'],
      liveUrl: 'https://andys-grill.rf.gd/',
      githubUrl: 'https://github.com/andys_grill',
    },
    {
      id: 12,
      title: 'La Taverna Website',
      description: 'La Taverna Lagos is an upscale Italian restaurant in Victoria Island offering authentic Italian cuisine, fine wines, and an elegant, romantic dining experience.',
      longDescription: 'Known for its elegant atmosphere and carefully curated menu, the restaurant caters to professionals, couples, and expatriates seeking premium dining in Lagos. The menu features classic Italian dishes, expertly prepared pasta, desserts, and a carefully selected wine list designed to complement each course. With attentive table service and a calm, romantic setting, La Taverna is ideal for business dinners, date nights, and special celebrations. Its reputation for consistency, ambience, and culinary excellence positions it as one of Victoria Island\'s distinguished Italian dining destinations.',
      image: '/img/taverna.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://la-taverna.rf.gd/?i=1',
      githubUrl: 'https://github.com/Sentrail/La_Taverna',
    },
    {
      id: 13,
      title: 'Cone Cafe Website',
      description: 'Cone Café is a modern Lagos café offering quality coffee, desserts, and light meals in a cosy, trendy environment perfect for casual meetups and quick breaks.',
      longDescription: 'Cone Café is a stylish and welcoming café in Lagos designed for relaxed coffee experiences and casual social gatherings. With a focus on specialty coffee, sweet treats, and light bites, the café provides a comfortable space for students, professionals, and friends to unwind.',
      image: '/img/cone.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://Cone_Cafe.rf.gd/',
      githubUrl: 'https://github.com/Sentrail/Cone_Cafe',
    },
    {
      id: 14,
      title: 'Texas 301 Website',
      description: 'Texas Street 301 is a top-rated American restaurant in De Leon, Texas, serving comfort food, local specialties, and family-friendly dining in a cosy, casual setting.',
      longDescription: 'Texas Street 301 is a highly regarded American restaurant located in De Leon, Texas, known for its welcoming atmosphere, fast service, and classic comfort food. With a strong community reputation and high customer ratings, it has become a staple for both locals and travelers.',
      image: '/img/texas.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://texas-301.rf.gd/',
      githubUrl: 'https://github.com/Sentrail/texas_street_301',
    }, */
  ];

  return (
    <>
      <br></br>
      {/* Dividing Line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-[#00D4FF] to-transparent opacity-50" />
      
      <section id="live-projects" className="full-bleed live-projects-section relative py-16 sm:py-24 bg-[#0A2540] dark:bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9nPjwvc3ZnPg==')] " />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-3">
            Live Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-white mx-auto mb-4" />
          <p className="text-white/70 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Actively deployed and production-ready Web Applications
          </p>
        </motion.div>


        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.slice(0, 8).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-[#00D4FF]/50">
                {/* Image */}
                <div className="relative h-24 xs:text-base sm:text-lg md:text-xl lg:text-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />
                </div>

                {/* Content */}
                <div className="p-2 sm:p-3 md:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 dark:text-gray-300 mb-2 sm:mb-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#00D4FF]/20 text-[#00D4FF] text-xs rounded-full border border-[#00D4FF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#00D4FF]"
                    >
                      <ExternalLink size={12} />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#00D4FF]"
                    >
                      <Github size={12} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,212,255,0.2)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {projects.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowAllProjectsModal(true)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#cdf7ff] text-[#0080ff] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-gray-700 dark:text-[#00D4FF] dark:hover:bg-gray-600"
            >
              <span className="relative z-10">
                View All Projects
              </span>
              <div className="absolute inset-0 bg-[#00D4FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 shadow-[0_0_20px_rgba(0,212,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setSelectedProject(null);
              if (projectOpenedFromAllProjectsModal) {
                setShowAllProjectsModal(true);
                setProjectOpenedFromAllProjectsModal(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-[#0A2540] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  if (projectOpenedFromAllProjectsModal) {
                    setShowAllProjectsModal(true);
                    setProjectOpenedFromAllProjectsModal(false);
                  }
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                <X className="text-white" />
              </button>

              {/* Modal Content */}
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-24 sm:h-32 md:h-48 lg:h-64 object-cover"
                />
                <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-100 mb-2 sm:mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-white/80 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-xs rounded-full border border-[#00D4FF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-[#00D4FF] text-[#0A2540] dark:text-gray-900 font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-colors duration-300"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      View Live
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-[#00D4FF] text-white dark:text-gray-200 font-semibold rounded-lg hover:bg-[#00D4FF]/10 transition-colors duration-300"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showAllProjectsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md dark:bg-black/80"
            onClick={() => setShowAllProjectsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full max-h-[90vh] bg-[#0A2540] dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowAllProjectsModal(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                <X className="text-white" />
              </button>

              {/* Modal Header */}
              <div className="p-4 pb-3">
                <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-1">
                  All Live Projects
                </h3>
                <p className="text-white/70 dark:text-gray-300 text-sm">
                  Complete showcase of live and deployed projects
                </p>
              </div>

              {/* Projects Grid in Modal */}
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[60vh] overflow-y-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group cursor-pointer"
                      onClick={() => {
                        setShowAllProjectsModal(false);
                        setProjectOpenedFromAllProjectsModal(true);
                        setSelectedProject(project);
                      }}
                    >
                      <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-[#00D4FF]/50">
                        {/* Image */}
                        <div className="relative h-36 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-3">
                          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-white/70 text-xs mb-2 line-clamp-2">{project.description}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-xs rounded-full border border-[#00D4FF]/30"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                                +{project.tags.length - 4}
                              </span>
                            )}
                          </div>

                          {/* Links */}
                          <div className="flex gap-2">
                            <a
                              href={project.liveUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 text-xs"
                            >
                              <ExternalLink size={12} />
                              <span>Live</span>
                            </a>
                            <a
                              href={project.githubUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 text-xs"
                            >
                              <Github size={12} />
                              <span>Code</span>
                            </a>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,212,255,0.2)]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
}

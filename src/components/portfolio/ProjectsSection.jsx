import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);
  const [projectOpenedFromAllProjectsModal, setProjectOpenedFromAllProjectsModal] = useState(false);

  const projects = [
   /* {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with cart, checkout, and admin panel',
      longDescription: 'A comprehensive e-commerce solution built with modern web technologies. Features include product catalog, shopping cart, secure checkout, order management, and an admin dashboard for inventory control. Implemented user authentication, payment processing integration, and real-time inventory updates.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with forecasts and interactive maps',
      longDescription: 'An intuitive weather application providing real-time weather data, 5-day forecasts, and interactive weather maps. Integrated multiple weather APIs for comprehensive data coverage. Features location-based weather, search functionality, and beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['JavaScript', 'Weather API', 'Leaflet.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Blog CMS',
      description: 'Content management system with markdown support',
      longDescription: 'A powerful blogging platform with a clean, distraction-free writing experience. Features include markdown editing, syntax highlighting for code blocks, image uploads, SEO optimization, and a responsive reading interface. Built with performance and user experience in mind.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      tags: ['PHP', 'MySQL', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Task Manager Pro',
      description: 'Collaborative project management tool',
      longDescription: 'A comprehensive task management application designed for teams. Features include task creation and assignment, project boards with drag-and-drop functionality, deadline tracking, team collaboration tools, and progress analytics. Supports real-time updates and notifications.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio builder with templates',
      longDescription: 'A SaaS application that allows users to create stunning portfolio websites without coding. Features include drag-and-drop page builder, multiple professional templates, custom domain support, and SEO optimization tools. Includes analytics dashboard for tracking portfolio performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    }, */
    {
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
      longDescription: 'A comprehensive tcketing application for monitoring tickets sales.',
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
      tags: ['Javscript','HTML', 'CSS', 'Paystack'],
      liveUrl: 'https://sentrail.github.io/Sunrise_Acre_Farm/',
      githubUrl: 'https://github.com/Sentrail/Sunrise_Acre_Farm',
    },
    {
      id: 9,
      title: 'Photography Portfolio Website',
      description: 'Photography Portfolio displaying website',
      longDescription: 'An intuitive photopgrapy portfolio for displaying of shoots.',
      image: '/img/photography.avif',
      tags: ['Javscript','CSS','HTML'],
      liveUrl: 'https://sentrail.github.io/Photography_Portfolio_Website/',
      githubUrl: 'https://github.com/Sentrail/Photography_Portfolio_Website',
    },
    {
      id: 11,
      title: 'Andys Grill Website',
      description: 'The heart of Agege nightlife. We serve premium smoked meats, grilled specials, and chilled drinks around the clock.',
      longDescription: 'Andy’s Smoke House & Grill is a premier destination for those who crave the real taste of smoke. Located in the vibrant LSDPC complex at Pen Cinema, we bridge the gap between quality casual dining and the exciting energy of Lagos nightlife.',
      image: '/img/grill_1.jpeg',
      tags: ['Javscript','Tailwind CSS','PHP', 'HTML'],
      liveUrl: 'https://andys-grill.rf.gd/',
      githubUrl: 'https://github.com/andys_grill',
    },
    {
      id: 12,
      title: 'La Taverna Website',
      description: 'La Taverna Lagos is an upscale Italian restaurant in Victoria Island offering authentic Italian cuisine, fine wines, and an elegant, romantic dining experience.',
      longDescription: 'Known for its elegant atmosphere and carefully curated menu, the restaurant caters to professionals, couples, and expatriates seeking premium dining in Lagos. The menu features classic Italian dishes, expertly prepared pasta, desserts, and a carefully selected wine list designed to complement each course. With attentive table service and a calm, romantic setting, La Taverna is ideal for business dinners, date nights, and special celebrations. Its reputation for consistency, ambience, and culinary excellence positions it as one of Victoria Island’s distinguished Italian dining destinations.',
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
    },
    {
      id: 15,
      title: 'Mexa Cocina Website',
      description: 'Mexa Cocina del Alma is a highly rated Mexican restaurant in Roma Norte, Mexico City, offering authentic cuisine, crafted cocktails, fine wine, and a cosy, romantic dining atmosphere.',
      longDescription: 'Located in the vibrant neighborhood of Roma Norte, Mexa Cocina del Alma delivers an elevated Mexican dining experience built on authenticity, flavor, and hospitality. With an outstanding customer rating and hundreds of reviews, the restaurant has established itself as a favorite among locals and tourists alike.',
      image: '/img/mexa.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://mexa-cocina.rf.gd/',
      githubUrl: 'https://github.com/Sentrail/mexa_cocina',
    },
    {
      id: 16,
      title: 'KeySpice Restaurant Website',
      description: 'KeySpice is a modern Nigerian restaurant website featuring a sleek design, responsive layout, and intuitive navigation for an enhanced user experience.',
      longDescription: 'KeySpice is a contemporary Nigerian restaurant website built with modern web technologies. It features a responsive design that adapts to all devices, intuitive navigation for easy browsing, and a clean aesthetic that highlights the restaurant\'s culinary offerings.',
      image: '/img/keyspice.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://keyspice_restaurant.rf.gd/',
      githubUrl: 'https://github.com/Sentrail/keyspice_restaurant',
    },
    {
      id: 17,
      title: 'Kingfisher Restaurant Website',
      description: 'Kingfisher Africa is a vibrant African restaurant in Lagos serving authentic Nigerian cuisine in a warm, family-friendly setting. Known for flavorful jollof rice, rich soups, grilled specialties, and generous portions, it’s a top destination for dine-in, takeaway, and group dining experiences.',
      longDescription: 'Kingfisher Africa is a popular African restaurant in Lagos dedicated to delivering authentic Nigerian flavors in a welcoming and energetic dining environment. Combining traditional recipes with fresh ingredients and bold spices, the restaurant offers a rich culinary experience that celebrates the depth and diversity of African cuisine. Guests can enjoy a wide selection of local favorites, including jollof rice, soups and swallows, pepper soup, grilled meats, suya, seafood, and hearty rice-and-protein combinations. The menu is thoughtfully structured to cater to individuals, families, professionals, and groups looking for satisfying meals in a comfortable setting.',
      image: '/img/kingfisher.png',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://kingfisherafrica.rf.gd/',
      githubUrl: 'https://github.com/Sentrail/KingFisher_Africa',
    },

  ];

  return (
    <section id="projects" className="full-bleed projects-section relative py-24 bg-[#0A2540] dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9nPjwvc3ZnPg==')] " />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-white mx-auto mb-6" />
          <p className="text-white/70 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the full stack
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
                      <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-[#00D4FF]/50">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
<div className="absolute inset-0 bg-linear-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-white/70 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-sm rounded-full border border-[#00D4FF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#00D4FF]"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#00D4FF]"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
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
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAllProjectsModal(true)}
              className="group relative px-8 py-4 bg-[#cdf7ff] text-[#0080ff] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-gray-700 dark:text-[#00D4FF] dark:hover:bg-gray-600"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
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
              className="relative max-w-4xl w-full bg-[#0A2540] rounded-2xl overflow-hidden shadow-2xl"
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
              <div className="max-h-[90vh] overflow-y-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white dark:text-gray-100 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/80 dark:text-gray-200 text-lg mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full border border-[#00D4FF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A2540] dark:text-gray-900 font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-[#00D4FF] text-white dark:text-gray-200 font-semibold rounded-lg hover:bg-[#00D4FF]/10 transition-colors duration-300"
                    >
                      <Github size={20} />
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
              <div className="p-8 pb-6">
                <h3 className="text-3xl font-bold text-white dark:text-gray-100 mb-2">
                  All Projects
                </h3>
                <p className="text-white/70 dark:text-gray-300">
                  Complete showcase of my work across different technologies and domains
                </p>
              </div>

              {/* Projects Grid in Modal */}
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`group cursor-pointer ${project.featured ? 'md:col-span-2 lg:row-span-2' : ''}`}
                      onClick={() => {
                        setShowAllProjectsModal(false);
                        setProjectOpenedFromAllProjectsModal(true);
                        setSelectedProject(project);
                      }}
                    >
                      <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-[#00D4FF]/50">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-white/70 text-sm mb-3 line-clamp-2">{project.description}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-xs rounded-full border border-[#00D4FF]/30"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                                +{project.tags.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Links */}
                          <div className="flex gap-3">
                            <a
                              href={project.liveUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                            >
                              <ExternalLink size={14} />
                              <span>Live</span>
                            </a>
                            <a
                              href={project.githubUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-white/70 hover:text-[#00D4FF] transition-colors duration-300 text-sm"
                            >
                              <Github size={14} />
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
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
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
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Health and workout monitoring application',
      longDescription: 'A comprehensive fitness tracking application for monitoring workouts, nutrition, and progress. Features include workout logging, exercise library with animations, nutrition tracking, progress charts, and goal setting. Integrates with fitness APIs for extended functionality.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React Native', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
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
      id: 1,
      title: 'Photography Portfolio Website',
      description: 'Photography Portfolio displaying website',
      longDescription: 'An intuitive photopgrapy portfolio for displaying of shoots.',
      image: '/img/photography.avif',
      tags: ['Javscript','CSS','HTML'],
      liveUrl: 'https://sentrail.github.io/Photography_Portfolio_Website/',
      githubUrl: 'https://github.com/Sentrail/Photography_Portfolio_Website',
    },
  ];

  return (
    <section id="projects" className="full-bleed projects-section relative py-24 bg-[#0A2540] overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-white mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the full stack
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.description}</p>

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
                      className="flex items-center gap-2 text-white/70 hover:text-[#00D4FF] transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-white/70 hover:text-[#00D4FF] transition-colors duration-300"
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
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
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
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
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
                      className="flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A2540] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-[#00D4FF] text-white font-semibold rounded-lg hover:bg-[#00D4FF]/10 transition-colors duration-300"
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
    </section>
  );
}
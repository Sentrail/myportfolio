import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { name: 'Frontend Development', icon: Code2, color: '#00D4FF' },
    { name: 'Backend Systems', icon: Server, color: '#FF6B6B' },
    { name: 'Database Design', icon: Database, color: '#4ECDC4' },
    { name: 'Web Applications', icon: Globe, color: '#95E1D3' },
    { name: 'Responsive Design', icon: Smartphone, color: '#FFD93D' },
    { name: 'UI/UX Design', icon: Palette, color: '#C77DFF' },
  ];

  const timeline = [
    { year: '2021', title: 'Started Frontend Journey', description: 'HTML, CSS, and JavaScript fundamentals' },
    { year: '2022', title: 'Started Frontend Journey', description: 'Mastered HTML, CSS, and JavaScript fundamentals' },
    { year: '2023', title: 'Advanced JavaScript', description: 'React, TypeScript, and modern framework development' },
    { year: '2024', title: 'Backend Exploration', description: 'PHP, MySQL, and API Integration' },
    { year: '2025', title: 'Fullstack Aspirations', description: 'Building complete web applications end-to-end' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#FAFAF9] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-[#0A2540] mx-auto" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-lg text-[#1E293B] leading-relaxed text-center mb-6">
            I'm a passionate developer on a journey from frontend mastery to fullstack excellence. 
            What started as a fascination with creating beautiful user interfaces has evolved into 
            a comprehensive understanding of web development from pixels to databases.
          </p>
          <p className="text-lg text-[#1E293B] leading-relaxed text-center">
            My approach combines aesthetic sensibility with technical precision, always striving 
            to create experiences that are both visually stunning and functionally robust. 
            I believe great software is where art meets engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon size={32} style={{ color: skill.color }} />
                  </div>
                  <h4 className="font-semibold text-[#0A2540]">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-12 text-center">
            My Journey
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#00D4FF] to-[#0A2540]" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <span className="text-[#00D4FF] font-bold text-lg">{item.year}</span>
                    <h4 className="text-xl font-bold text-[#0A2540] mt-2">{item.title}</h4>
                    <p className="text-[#1E293B] mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00D4FF] rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
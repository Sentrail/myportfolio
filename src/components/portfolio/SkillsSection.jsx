import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MySQL', level: 85 },
        { name: 'API Development', level: 80 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Performance Optimization', level: 75 },
        { name: 'Testing', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#FAFAF9] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0A2540]/10 rounded-full blur-3xl" />

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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#00D4FF] to-[#0A2540] mx-auto mb-6" />
          <p className="text-[#1E293B] text-lg max-w-2xl mx-auto">
            Proficiency across modern web technologies and development tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6 pb-4 border-b-2 border-[#00D4FF]/30">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-[#0A2540] font-medium">{skill.name}</span>
                      <span className="text-[#00D4FF] font-semibold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-[#00D4FF] to-[#0066FF] rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Radial Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#0A2540] mb-8 text-center">
            Core Competencies Overview
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Frontend', percentage: 90, color: '#00D4FF' },
              { name: 'Backend', percentage: 80, color: '#0066FF' },
              { name: 'Database', percentage: 85, color: '#4ECDC4' },
              { name: 'DevOps', percentage: 70, color: '#FFD93D' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 352 }}
                      whileInView={{
                        strokeDashoffset: 352 - (352 * skill.percentage) / 100,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                      style={{
                        strokeDasharray: 352,
                        filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0A2540]">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <span className="text-[#0A2540] font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

     `
        
      `
    </section>
  );
}
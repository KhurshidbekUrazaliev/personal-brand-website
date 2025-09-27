'use client';

import { motion } from 'framer-motion';
import { Download, Calendar } from 'lucide-react';
import { Skill, Experience, Achievement } from '@/types';

const skills: Skill[] = [
  // Technical Skills
  { name: 'JavaScript/TypeScript', level: 85, category: 'technical' },
  { name: 'React/Next.js', level: 90, category: 'technical' },
  { name: 'Python', level: 80, category: 'technical' },
  { name: 'Node.js', level: 75, category: 'technical' },
  { name: 'AI/Machine Learning', level: 70, category: 'technical' },
  { name: 'TailwindCSS', level: 85, category: 'technical' },
  { name: 'Git/GitHub', level: 80, category: 'technical' },
  { name: 'Database Design', level: 70, category: 'technical' },

  // Languages
  { name: 'English', level: 95, category: 'language' },
  { name: 'Korean', level: 75, category: 'language' },
  { name: 'Russian', level: 90, category: 'language' },
  { name: 'Uzbek', level: 100, category: 'language' },

  // Soft Skills
  { name: 'Leadership', level: 85, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Time Management', level: 85, category: 'soft' },
];

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'Personal Projects',
    duration: '2023 - Present',
    description: [
      'Built responsive web applications using React, Next.js, and TypeScript',
      'Implemented AI-powered features using modern ML libraries',
      'Created e-commerce solutions with Shopify integration',
      'Developed portfolio websites with focus on performance and SEO',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Python'],
  },
  {
    id: '2',
    title: 'SAT Prep Tutor',
    company: 'Freelance',
    duration: '2023 - Present',
    description: [
      'Helped students improve SAT scores through personalized teaching',
      'Developed custom study materials and practice tests',
      'Achieved consistent student score improvements of 200+ points',
      'Specialized in Math and English sections',
    ],
  },
  {
    id: '3',
    title: 'Business Development',
    company: 'Dropshipping Ventures',
    duration: '2022 - 2023',
    description: [
      'Launched and managed multiple e-commerce stores',
      'Implemented data-driven marketing strategies',
      'Achieved profitability through systematic approach to product research',
      'Gained experience in international trade and logistics',
    ],
    technologies: ['Shopify', 'Facebook Ads', 'Google Analytics', 'Excel'],
  },
];

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'SAT Score 1400+',
    description: 'Achieved high SAT score, aiming for 1600',
    date: '2024',
    category: 'academic',
  },
  {
    id: '2',
    title: 'IELTS Band 7.5',
    description: 'Demonstrated advanced English proficiency',
    date: '2024',
    category: 'academic',
  },
  {
    id: '3',
    title: 'Multilingual Proficiency',
    description: 'Fluent in 4 languages: English, Korean, Russian, Uzbek',
    date: '2024',
    category: 'personal',
  },
  {
    id: '4',
    title: 'Chess Rating Goal',
    description: 'Working towards 2000 ELO rating in chess',
    date: 'In Progress',
    category: 'personal',
  },
];

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-gray-900 dark:text-white">
        {skill.name}
      </span>
      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
      <motion.div
        className="h-2 rounded-full bg-blue-600"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export function Resume() {
  const technicalSkills = skills.filter((skill) => skill.category === 'technical');
  const languageSkills = skills.filter((skill) => skill.category === 'language');
  const softSkills = skills.filter((skill) => skill.category === 'soft');

  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Resume & Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise, experience, and achievements
          </p>
          
          {/* Download Resume Button */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download PDF Resume
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Skills & Expertise
            </h3>
            
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Technical Skills */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Technical Skills
                </h4>
                <div className="space-y-6">
                  {technicalSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Language Skills */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Languages
                </h4>
                <div className="space-y-6">
                  {languageSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Soft Skills
                </h4>
                <div className="space-y-6">
                  {softSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Key Achievements
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {achievement.description}
                  </p>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {achievement.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
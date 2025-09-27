'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import Link from 'next/link';

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Study Assistant',
    description: 'A web application that uses machine learning to create personalized study plans and practice questions for SAT preparation. Features include adaptive learning algorithms and progress tracking.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Python', 'OpenAI API', 'TailwindCSS', 'MongoDB'],
    liveUrl: 'https://study-assistant-demo.vercel.app',
    githubUrl: 'https://github.com/faris/study-assistant',
    category: 'ai',
  },
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing multiple Shopify stores. Includes analytics, inventory management, and automated marketing tools.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'TypeScript', 'Shopify API', 'Chart.js', 'PostgreSQL'],
    liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/faris/ecommerce-dashboard',
    category: 'web',
  },
  {
    id: '3',
    title: 'Language Learning Tracker',
    description: 'A multilingual application to track language learning progress across different languages. Features spaced repetition, progress visualization, and community features.',
    image: '/api/placeholder/400/250',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'Socket.io'],
    liveUrl: 'https://language-tracker-demo.vercel.app',
    githubUrl: 'https://github.com/faris/language-tracker',
    category: 'web',
  },
  {
    id: '4',
    title: 'Dropshipping Analytics Suite',
    description: 'A comprehensive analytics platform for dropshipping businesses. Tracks performance metrics, competitor analysis, and automated reporting.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    githubUrl: 'https://github.com/faris/dropshipping-analytics',
    category: 'business',
  },
  {
    id: '5',
    title: 'Islamic Prayer Times App',
    description: 'A mobile-first web app providing accurate prayer times, Qibla direction, and Islamic calendar. Built with focus on clean UI and offline functionality.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'JavaScript', 'SQLite', 'API Integration'],
    liveUrl: 'https://prayer-times-demo.vercel.app',
    githubUrl: 'https://github.com/faris/prayer-times',
    category: 'other',
  },
  {
    id: '6',
    title: 'Chess Game Analysis Tool',
    description: 'A tool for analyzing chess games with AI-powered move suggestions and pattern recognition. Helping to improve towards 2000 ELO rating.',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'Chess.js', 'Stockfish', 'React', 'Flask'],
    liveUrl: 'https://chess-analysis-demo.vercel.app',
    githubUrl: 'https://github.com/faris/chess-analysis',
    category: 'ai',
  },
];

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
  { id: 'business', name: 'Business', count: projects.filter(p => p.category === 'business').length },
  { id: 'other', name: 'Other', count: projects.filter(p => p.category === 'other').length },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Projects & Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A showcase of my technical projects, business experiments, and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-70">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-white bg-opacity-90 text-gray-900 rounded-full">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm font-medium flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="h-4 w-4" />
              View All on GitHub
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Let&apos;s Collaborate
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
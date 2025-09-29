'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Target, Globe2 } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Faith',
    description: 'Guided by Islamic principles and values in all endeavors',
  },
  {
    icon: Target,
    title: 'Discipline',
    description: 'Consistent growth through structured learning and practice',
  },
  {
    icon: Globe2,
    title: 'Innovation',
    description: 'Embracing technology to create meaningful solutions',
  },
  {
    icon: Target,
    title: 'Growth',
    description: 'Continuous improvement in personal and professional skills',
  },
];

const journey = [
  {
    location: 'Besharyk, Uzbekistan',
    description: 'Grew up on the quiet edges, building foundational values',
  },
  {
    location: 'Busan, South Korea',
    description: 'Chasing big dreams on vibrant shores, expanding horizons',
  },
  {
    location: 'Global Impact',
    description: 'Building ventures that grow beyond me and give back',
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A journey of faith, growth, and innovation across cultures and
            technologies
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Story
            </h3>
            <div className="mt-6 space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                I grew up on the quiet edges of Besharyk, Uzbekistan, and today
                I&apos;m chasing big dreams on the vibrant shores of Busan. My
                journey blends cultures, curiosity, and a faith that keeps me
                grounded while I reach for more.
              </p>
              <p>
                I&apos;m diving deep into AI, machine learning, data science,
                and web development, aiming to build technology that makes a
                real difference. Along the way, I&apos;ve earned a 1400+ SAT
                score (on my way to 1600) and a 7.5 IELTS band, and I speak
                English, Korean (60%), Russian (60%), Turkish (50%), and Uzbek,
                which opens doors to opportunities around the world.
              </p>
              <p>
                But tech is just one part of the picture. I&apos;m equally
                excited about investing, real estate, sales, and marketing—the
                skills that turn ideas into lasting impact. Guided by the Four
                C&apos;s of Leverage—<strong>Code</strong>,{' '}
                <strong>Content</strong>, <strong>Capital</strong>, and
                <strong>Community</strong>—I&apos;m focused on creating projects
                and ventures that grow beyond me and give back to others.
              </p>
            </div>
          </motion.div>

          {/* Journey Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Journey Map
            </h3>
            <div className="mt-6 space-y-6">
              {journey.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.location}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            Core Values
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 p-6 text-center transition-shadow hover:shadow-lg dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
            Quick Facts
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                1600
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Target SAT Score
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                2000
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Chess Rating Goal
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                4C&apos;s
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Leverage Principles
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

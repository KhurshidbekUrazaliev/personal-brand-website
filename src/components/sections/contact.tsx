'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Get in touch for collaborations',
    value: 'khurshidbekurazaliev@gmail.com',
    href: 'mailto:khurshidbekurazaliev@gmail.com',
  },
  {
    icon: MessageCircle,
    title: 'LinkedIn',
    description: 'Connect professionally',
    value: 'linkedin.com/in/khurshidbekurazaliev',
    href: 'https://www.linkedin.com/in/khurshidbekurazaliev',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Check out my code',
    value: 'github.com/KhurshidbekUrazaliev',
    href: 'https://github.com/KhurshidbekUrazaliev',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Currently based in',
    value: 'Busan, South Korea',
    href: null,
  },
];

const collaborationAreas = [
  {
    title: 'Web Development',
    description: 'Full-stack applications with modern frameworks',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions and data-driven applications',
    skills: ['Python', 'TensorFlow', 'OpenAI API', 'Data Analysis'],
  },
  {
    title: 'Business Development',
    description: 'E-commerce, analytics, and growth strategies',
    skills: ['Shopify', 'Analytics', 'Marketing', 'Strategy'],
  },
  {
    title: 'Education & Tutoring',
    description: 'SAT prep, language learning, and skill development',
    skills: ['SAT Prep', 'Language Learning', 'Curriculum Design'],
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Let&apos;s Collaborate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Ready to build something amazing together? I&apos;m always open to
            discussing new opportunities, innovative projects, and meaningful
            collaborations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start space-x-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700 ${
                    method.href
                      ? 'cursor-pointer transition-shadow hover:shadow-md'
                      : ''
                  }`}
                  onClick={() =>
                    method.href && window.open(method.href, '_blank')
                  }
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <method.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {method.description}
                    </p>
                    <p className="font-medium text-blue-600 dark:text-blue-400">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Collaboration Areas */}
            <div className="mt-12">
              <h4 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                Areas of Collaboration
              </h4>
              <div className="grid gap-6 sm:grid-cols-2">
                {collaborationAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-900"
                  >
                    <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      {area.title}
                    </h5>
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {area.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Let's collaborate on..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Tell me about your project, idea, or how we can work together..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Build the Future Together?
            </h3>
            <p className="mb-6 text-lg opacity-90">
              Whether it&apos;s a groundbreaking AI project, a sleek web
              application, or an innovative business solution, I&apos;m excited
              to collaborate and create something extraordinary.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:khurshidbekurazaliev@gmail.com"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                Start a Conversation
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

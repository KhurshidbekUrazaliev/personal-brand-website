import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/KhurshidbekUrazaliev',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khurshidbekurazaliev/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:khurshidbekurazaliev@gmail.com',
    icon: Mail,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ummah_x/',
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Khurshidbek. Built with Next.js &
            TailwindCSS.
          </p>

          {/* Mission Statement */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            Faith • Growth • Leverage
          </p>
        </div>
      </div>
    </footer>
  );
}

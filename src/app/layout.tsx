import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Khurshidbek Urazaliev - AI & Tech Innovator',
    template: '%s | Khurshidbek Urazaliev',
  },
  description:
    'AI & Tech Innovator | Multilingual Learner | Faith-Driven Creator. Building tech, mastering languages, and creating leverage for a bigger future.',
  keywords: [
    'AI',
    'Technology',
    'Web Development',
    'Machine Learning',
    'Programming',
    'Portfolio',
    'Data Science',
    'Investing',
    'Real Estate',
    'Sales',
    'Marketing',
  ],
  authors: [{ name: 'Khurshidbek Urazaliev' }],
  creator: 'Khurshidbek Urazaliev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://personal-brand-website-qz5fs4sdf-khurshidbeks-projects-06af2cf9.vercel.app',
    title: 'Khurshidbek Urazaliev - AI & Tech Innovator',
    description:
      'AI & Tech Innovator | Multilingual Learner | Faith-Driven Creator',
    siteName: 'Khurshidbek Urazaliev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khurshidbek Urazaliev - AI & Tech Innovator',
    description:
      'AI & Tech Innovator | Multilingual Learner | Faith-Driven Creator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

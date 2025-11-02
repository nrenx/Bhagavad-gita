import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageTransition } from "@/components/ui/animations";
import { SkipLink } from "@/components/ui/skip-link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAssetPath, getAssetUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://bhagavad-gita.org';
const HERO_IMAGE_PATH = getAssetPath('/images/bhagavad-image.png');
const HERO_IMAGE_URL = getAssetUrl('/images/bhagavad-image.png');
const LOGO_IMAGE_PATH = getAssetPath('/images/logo.png');
const FAVICON_PATH = getAssetPath('/favicon.png');

export const metadata: Metadata = {
  title: {
    default: "Bhagavad Gita - Sacred Text & Wisdom",
    template: "%s | Bhagavad Gita"
  },
  description: "Complete Bhagavad Gita with Sanskrit verses, English translations, word-by-word meanings, and spiritual commentary. Explore all 18 chapters and 700+ verses of this sacred Hindu scripture.",
  keywords: [
    "Bhagavad Gita",
    "Sanskrit",
    "Hindu scripture",
    "Krishna",
    "Arjuna",
    "spiritual wisdom",
    "yoga",
    "dharma",
    "moksha",
    "Hinduism",
    "sacred text",
    "philosophy",
    "meditation",
    "spiritual growth"
  ],
  authors: [{ name: "Bhagavad Gita Wisdom" }],
  creator: "Bhagavad Gita Wisdom",
  publisher: "Bhagavad Gita Wisdom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(DEFAULT_BASE_URL),
  alternates: {
    canonical: DEFAULT_BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DEFAULT_BASE_URL,
    title: 'Bhagavad Gita - Sacred Text & Wisdom',
    description: 'Complete Bhagavad Gita with Sanskrit verses, English translations, and spiritual commentary',
    siteName: 'Bhagavad Gita Wisdom',
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Bhagavad Gita - Sacred Text & Wisdom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhagavad Gita - Sacred Text & Wisdom',
    description: 'Complete Bhagavad Gita with Sanskrit verses, English translations, and spiritual commentary',
    images: [HERO_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: FAVICON_PATH, type: 'image/png', sizes: 'any' },
      { url: LOGO_IMAGE_PATH, type: 'image/png', sizes: 'any' },
    ],
    shortcut: [FAVICON_PATH],
    apple: [
      { url: LOGO_IMAGE_PATH, sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: LOGO_IMAGE_PATH, color: '#ea580c' }
    ]
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
  <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/notosansdevanagari/v25/TuGKUUVrRomTS2TjqwC-JC7DWkDhVxOxYqx6QdZPnQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body 
        className="font-body antialiased bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen"
        suppressHydrationWarning={true}
      >
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <div className="relative">
          <Header />
          <PageTransition>
            <main id="main-content" role="main">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}

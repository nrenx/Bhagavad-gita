import React from 'react';
import { Metadata } from 'next';
import { ChaptersContent } from '@/components/content/ChaptersContent';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/seo-structured-data';

export const metadata: Metadata = {
  title: 'All 18 Chapters - Bhagavad Gita',
  description: 'Complete list of all 18 chapters of the Bhagavad Gita with Sanskrit verses, English translations, and video commentary. Explore teachings on Karma Yoga, Bhakti Yoga, Jnana Yoga, and more.',
  keywords: [
    'Bhagavad Gita chapters',
    'Bhagavad Gita 18 chapters',
    'Bhagavad Gita book',
    'Bhagavad Gita complete',
    'Bhagavad Gita explanation',
    'Bhagavad Gita meaning',
    'Krishna teachings',
    'The Gita',
    'Hindu scripture online',
    'Bhagavad Gita quotes',
    'Bhagavad Gita slokas',
    'Bhagavad Gita videos',
    'Karma Yoga',
    'Bhakti Yoga',
    'Jnana Yoga',
    'spiritual wisdom',
    'Vyasa',
    'Sanskrit verses'
  ],
  openGraph: {
    title: 'All 18 Chapters - Bhagavad Gita',
    description: 'Complete list of all 18 chapters of the Bhagavad Gita with Sanskrit verses, English translations, and video commentary.',
    url: '/chapters',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All 18 Chapters - Bhagavad Gita',
    description: 'Complete list of all 18 chapters of the Bhagavad Gita with Sanskrit verses and English translations.',
  },
  alternates: {
    canonical: '/chapters',
  },
};

export default function ChaptersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chapters', url: '/chapters' },
  ]);

  return (
    <>
      <StructuredData data={[breadcrumbSchema]} />
      <ChaptersContent />
    </>
  );
}

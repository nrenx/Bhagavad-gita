import React from 'react';
import { Metadata } from 'next';
import { AboutContent } from '@/components/content/AboutContent';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-structured-data';

export const metadata: Metadata = {
  title: 'About - Bhagavad Gita Wisdom',
  description: 'Learn about the Bhagavad Gita, its history, significance, and how this sacred Hindu scripture guides millions toward spiritual enlightenment. Discover who wrote the Bhagavad Gita and its timeless teachings.',
  keywords: [
    'about Bhagavad Gita',
    'what is Bhagavad Gita',
    'who wrote Bhagavad Gita',
    'Bhagavad Gita history',
    'Bhagavad Gita meaning',
    'Bhagavad Gita book',
    'Bhagavad Gita explanation',
    'Vyasa',
    'Mahabharata',
    'Krishna teachings',
    'Hindu scripture',
    'The Gita',
    'spiritual wisdom',
    'sacred text',
    'philosophy',
  ],
  openGraph: {
    title: 'About - Bhagavad Gita Wisdom',
    description: 'Learn about the Bhagavad Gita, its history, and significance in Hindu philosophy and spirituality.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About - Bhagavad Gita Wisdom',
    description: 'Learn about the Bhagavad Gita, its history, and significance in Hindu philosophy.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'What is the Bhagavad Gita?',
      answer: 'The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata. It presents a conversation between Prince Arjuna and Lord Krishna about duty, righteousness, and the path to spiritual enlightenment.',
    },
    {
      question: 'Who wrote the Bhagavad Gita?',
      answer: 'The Bhagavad Gita was composed by Sage Vyasa (Ved Vyasa) as part of the Mahabharata. The teachings are spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra.',
    },
    {
      question: 'How many chapters are in the Bhagavad Gita?',
      answer: 'The Bhagavad Gita contains 18 chapters with approximately 700 verses (shlokas) covering various aspects of yoga, dharma, karma, and spiritual wisdom.',
    },
    {
      question: 'Is the Bhagavad Gita available in multiple languages?',
      answer: 'Yes, the Bhagavad Gita is available in Sanskrit (original), English, Hindi, Telugu, Tamil, Bengali, and many other Indian and international languages.',
    },
  ]);

  return (
    <>
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <AboutContent />
    </>
  );
}

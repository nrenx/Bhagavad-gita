import React from 'react';
import { Metadata } from 'next';
import { DonateContent } from '@/components/content/DonateContent';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/seo-structured-data';

export const metadata: Metadata = {
  title: 'Donate - Support Bhagavad Gita Wisdom',
  description: 'Support our mission to provide free access to the Bhagavad Gita teachings. Your donation helps us maintain this website and share spiritual wisdom with seekers worldwide.',
  keywords: [
    'donate to Bhagavad Gita',
    'support spiritual education',
    'Bhagavad Gita donation',
    'Hindu scripture support',
    'spiritual wisdom donation',
    'free Bhagavad Gita',
  ],
  openGraph: {
    title: 'Donate - Support Bhagavad Gita Wisdom',
    description: 'Support our mission to provide free access to the Bhagavad Gita teachings worldwide.',
    url: '/donate',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Donate - Support Bhagavad Gita Wisdom',
    description: 'Support our mission to provide free access to the Bhagavad Gita teachings.',
  },
  alternates: {
    canonical: '/donate',
  },
};

export default function DonatePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Donate', url: '/donate' },
  ]);

  return (
    <>
      <StructuredData data={[breadcrumbSchema]} />
      <DonateContent />
    </>
  );
}

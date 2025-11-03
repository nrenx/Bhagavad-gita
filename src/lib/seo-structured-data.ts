/**
 * Structured data (JSON-LD) generators for SEO
 * Helps Google understand our content and show rich results
 */

import { SITE_BASE_URL } from './utils';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Website schema for homepage
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bhagavad Gita - Sacred Text & Wisdom',
    alternateName: 'Bhagavad Gita Wisdom',
    url: SITE_BASE_URL,
    description: 'Complete Bhagavad Gita with Sanskrit verses, English translations, word-by-word meanings, and spiritual commentary. Explore all 18 chapters and 700+ verses.',
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: 'Bhagavad Gita Wisdom',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bhagavad Gita Wisdom',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_BASE_URL}/chapters?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Article schema for verse pages
 */
export function generateVerseArticleSchema(
  chapter: number,
  verse: number,
  chapterTitle: string,
  verseContent: {
    sanskrit: string;
    english: string;
    romanized: string;
  }
) {
  const url = `${SITE_BASE_URL}/chapters/${chapter}/verse/${verse}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Chapter ${chapter}, Verse ${verse} - ${chapterTitle}`,
    description: verseContent.english.substring(0, 150) + '...',
    image: `${SITE_BASE_URL}/images/bhagavad-image.png`,
    author: {
      '@type': 'Person',
      name: 'Bhagavad Gita (Krishna)',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bhagavad Gita Wisdom',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo.png`,
      },
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: 'Hindu Scripture',
    inLanguage: ['en', 'sa'], // English and Sanskrit
    about: {
      '@type': 'Thing',
      name: 'Bhagavad Gita',
      description: 'Ancient Hindu scripture',
    },
  };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate Book schema for Bhagavad Gita
 */
export function generateBookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'Bhagavad Gita',
    alternateName: ['Bhagwat Geeta', 'Gita', 'The Song of God'],
    description: 'A 700-verse Hindu scripture that is part of the epic Mahabharata, containing a conversation between Krishna and Arjuna.',
    author: {
      '@type': 'Person',
      name: 'Vyasa',
    },
    inLanguage: 'sa', // Sanskrit
    numberOfPages: 700, // 700 verses
    bookFormat: 'https://schema.org/EBook',
    genre: ['Religious', 'Philosophy', 'Spirituality'],
    about: [
      {
        '@type': 'Thing',
        name: 'Hinduism',
      },
      {
        '@type': 'Thing',
        name: 'Yoga',
      },
      {
        '@type': 'Thing',
        name: 'Philosophy',
      },
    ],
  };
}

/**
 * Generate Chapter schema (as part of Book)
 */
export function generateChapterSchema(
  chapterNumber: number,
  chapterTitle: string,
  verseCount: number,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Chapter',
    name: `Chapter ${chapterNumber}: ${chapterTitle}`,
    description: description,
    position: chapterNumber,
    isPartOf: {
      '@type': 'Book',
      name: 'Bhagavad Gita',
    },
    url: `${SITE_BASE_URL}/chapters/${chapterNumber}`,
    numberOfPages: verseCount,
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bhagavad Gita Wisdom',
    url: SITE_BASE_URL,
    logo: `${SITE_BASE_URL}/images/logo.png`,
    description: 'Providing authentic Bhagavad Gita teachings with Sanskrit verses, English translations, and spiritual commentary.',
    sameAs: [
      // Add your social media links here when available
      // 'https://www.facebook.com/bhagavadgitawisdom',
      // 'https://twitter.com/bhagavadgita',
    ],
  };
}



/**
 * Internal linking utilities for better SEO and user navigation
 */

import { getChapterInfo, verseExists } from './data';

export interface RelatedVerse {
  chapter: number;
  verse: number;
  title: string;
  reason: string;
}

/**
 * Get related verses based on common themes
 */
export function getRelatedVerses(chapter: number, verse: number): RelatedVerse[] {
  const related: RelatedVerse[] = [];

  // Famous verses that are always good to link to
  const famousVerses = [
    { chapter: 2, verse: 47, reason: 'On Karma Yoga - doing duty without attachment' },
    { chapter: 2, verse: 56, reason: 'On the qualities of a wise person' },
    { chapter: 6, verse: 5, reason: 'On self-discipline and control' },
    { chapter: 9, verse: 22, reason: 'On devotion and surrender' },
    { chapter: 18, verse: 66, reason: 'The ultimate message of surrender' },
  ];

  // Theme-based connections
  const themeMap: Record<number, Array<{ chapter: number; verse: number; reason: string }>> = {
    // Chapter 1 - War/Duty themes
    1: [
      { chapter: 2, verse: 3, reason: 'Krishna\'s response to Arjuna\'s dejection' },
      { chapter: 2, verse: 31, reason: 'On performing one\'s duty' },
    ],
    // Chapter 2 - Knowledge themes
    2: [
      { chapter: 4, verse: 38, reason: 'More on the power of knowledge' },
      { chapter: 13, verse: 1, reason: 'Field and knower of the field' },
    ],
    // Chapter 3 - Action themes
    3: [
      { chapter: 5, verse: 2, reason: 'On renunciation of action' },
      { chapter: 18, verse: 45, reason: 'On perfection through one\'s duty' },
    ],
    // Chapter 6 - Meditation themes
    6: [
      { chapter: 8, verse: 5, reason: 'On remembering God at death' },
      { chapter: 12, verse: 6, reason: 'On devotion and meditation' },
    ],
    // Chapter 9 - Devotion themes
    9: [
      { chapter: 12, verse: 13, reason: 'Qualities of a devotee' },
      { chapter: 18, verse: 65, reason: 'On complete devotion' },
    ],
    // Chapter 12 - Bhakti themes
    12: [
      { chapter: 9, verse: 34, reason: 'On surrender to Krishna' },
      { chapter: 11, verse: 54, reason: 'On devotion and seeing God' },
    ],
  };

  // Add theme-based related verses
  if (themeMap[chapter]) {
    themeMap[chapter].forEach(rel => {
      if (!(rel.chapter === chapter && rel.verse === verse)) {
        const chapterInfo = getChapterInfo(rel.chapter);
        if (chapterInfo && verseExists(rel.chapter, rel.verse)) {
          related.push({
            chapter: rel.chapter,
            verse: rel.verse,
            title: `${chapterInfo.title} - ${rel.chapter}.${rel.verse}`,
            reason: rel.reason,
          });
        }
      }
    });
  }

  // Add some famous verses if we have space
  const currentVerseKey = `${chapter}.${verse}`;
  famousVerses.forEach(fv => {
    const verseKey = `${fv.chapter}.${fv.verse}`;
    if (verseKey !== currentVerseKey && related.length < 5) {
      const chapterInfo = getChapterInfo(fv.chapter);
      if (chapterInfo && verseExists(fv.chapter, fv.verse)) {
        // Check if not already added
        const alreadyAdded = related.some(r => r.chapter === fv.chapter && r.verse === fv.verse);
        if (!alreadyAdded) {
          related.push({
            chapter: fv.chapter,
            verse: fv.verse,
            title: `${chapterInfo.title} - ${fv.chapter}.${fv.verse}`,
            reason: fv.reason,
          });
        }
      }
    }
  });

  // Return maximum 5 related verses
  return related.slice(0, 5);
}

/**
 * Get popular verses in the same chapter
 */
export function getPopularVersesInChapter(chapter: number, currentVerse: number): Array<{ verse: number; title: string }> {
  // Define key verses per chapter
  const keyVerses: Record<number, number[]> = {
    1: [1, 20, 47],
    2: [20, 47, 56, 62, 63],
    3: [19, 27, 35],
    4: [7, 8, 38],
    5: [18, 25, 29],
    6: [5, 35, 47],
    7: [14, 18, 21],
    8: [5, 14, 28],
    9: [22, 27, 34],
    10: [8, 20, 41],
    11: [32, 54, 55],
    12: [6, 13, 14],
    13: [1, 19, 34],
    14: [26, 27],
    15: [7, 15, 19],
    16: [1, 21, 24],
    17: [3, 23, 28],
    18: [45, 58, 65, 66, 78],
  };

  const chapterInfo = getChapterInfo(chapter);
  if (!chapterInfo || !keyVerses[chapter]) {
    return [];
  }

  return keyVerses[chapter]
    .filter(v => v !== currentVerse && verseExists(chapter, v))
    .slice(0, 3)
    .map(v => ({
      verse: v,
      title: `Verse ${v}`,
    }));
}

/**
 * Get a descriptive link text for a chapter
 */
export function getChapterLinkText(chapterNumber: number): string {
  const chapterInfo = getChapterInfo(chapterNumber);
  if (!chapterInfo) return `Chapter ${chapterNumber}`;
  
  return `Chapter ${chapterNumber}: ${chapterInfo.title}`;
}

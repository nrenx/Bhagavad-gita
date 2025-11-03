/**
 * i18n (internationalization) utilities for multi-language support
 * Currently supports: English (en) and Hindi (hi)
 */

export type SupportedLanguage = 'en' | 'hi';

export interface Translation {
  // Navigation
  home: string;
  chapters: string;
  about: string;
  donate: string;
  
  // Chapter page
  chapter: string;
  verse: string;
  verses: string;
  totalVerses: string;
  current: string;
  nextChapter: string;
  previousChapter: string;
  chapterOverview: string;
  
  // Verse page
  sanskritShloka: string;
  romanizedTransliteration: string;
  englishTranslation: string;
  wordByWord: string;
  videoCommentary: string;
  chapterContext: string;
  summary: string;
  nextVerse: string;
  previousVerse: string;
  relatedVerses: string;
  keyVerses: string;
  
  // Actions
  share: string;
  copy: string;
  readMore: string;
  exploreChapters: string;
  
  // Messages
  copiedToClipboard: string;
  failedToCopy: string;
}

const translations: Record<SupportedLanguage, Translation> = {
  en: {
    // Navigation
    home: 'Home',
    chapters: 'Chapters',
    about: 'About',
    donate: 'Donate',
    
    // Chapter page
    chapter: 'Chapter',
    verse: 'Verse',
    verses: 'Verses',
    totalVerses: 'Total Verses',
    current: 'Current',
    nextChapter: 'Next Chapter',
    previousChapter: 'Previous Chapter',
    chapterOverview: 'Chapter Overview',
    
    // Verse page
    sanskritShloka: 'Sanskrit Shloka',
    romanizedTransliteration: 'Romanized Transliteration',
    englishTranslation: 'English Translation',
    wordByWord: 'Word-by-Word Translation',
    videoCommentary: 'Video Commentary',
    chapterContext: 'Chapter Context',
    summary: 'Summary',
    nextVerse: 'Next Verse',
    previousVerse: 'Previous Verse',
    relatedVerses: 'Related Verses You May Find Helpful',
    keyVerses: 'Key Verses in This Chapter',
    
    // Actions
    share: 'Share',
    copy: 'Copy',
    readMore: 'Read More',
    exploreChapters: 'Explore All Chapters',
    
    // Messages
    copiedToClipboard: 'Copied to clipboard',
    failedToCopy: 'Failed to copy',
  },
  
  hi: {
    // Navigation
    home: 'मुख्य पृष्ठ',
    chapters: 'अध्याय',
    about: 'हमारे बारे में',
    donate: 'दान करें',
    
    // Chapter page
    chapter: 'अध्याय',
    verse: 'श्लोक',
    verses: 'श्लोक',
    totalVerses: 'कुल श्लोक',
    current: 'वर्तमान',
    nextChapter: 'अगला अध्याय',
    previousChapter: 'पिछला अध्याय',
    chapterOverview: 'अध्याय सारांश',
    
    // Verse page
    sanskritShloka: 'संस्कृत श्लोक',
    romanizedTransliteration: 'रोमनीकृत उच्चारण',
    englishTranslation: 'अंग्रेज़ी अनुवाद',
    wordByWord: 'शब्द-दर-शब्द अनुवाद',
    videoCommentary: 'वीडियो टिप्पणी',
    chapterContext: 'अध्याय संदर्भ',
    summary: 'सारांश',
    nextVerse: 'अगला श्लोक',
    previousVerse: 'पिछला श्लोक',
    relatedVerses: 'संबंधित श्लोक जो आपके लिए सहायक हो सकते हैं',
    keyVerses: 'इस अध्याय के मुख्य श्लोक',
    
    // Actions
    share: 'साझा करें',
    copy: 'कॉपी करें',
    readMore: 'और पढ़ें',
    exploreChapters: 'सभी अध्यायों का अन्वेषण करें',
    
    // Messages
    copiedToClipboard: 'क्लिपबोर्ड पर कॉपी किया गया',
    failedToCopy: 'कॉपी करने में विफल',
  },
};

/**
 * Get translations for a specific language
 */
export function getTranslations(language: SupportedLanguage = 'en'): Translation {
  return translations[language] || translations.en;
}

/**
 * Simple translation hook (for now just returns English)
 * In future, this can be connected to a context provider
 */
export function useTranslations(): Translation {
  // TODO: Connect to language context when implementing full i18n
  return translations.en;
}

/**
 * Get chapter title in Hindi
 */
export function getChapterTitleInHindi(chapterNumber: number): string {
  const hindiTitles: Record<number, string> = {
    1: 'अर्जुन विषाद योग',
    2: 'सांख्य योग',
    3: 'कर्म योग',
    4: 'ज्ञान कर्म संन्यास योग',
    5: 'कर्म संन्यास योग',
    6: 'आत्म संयम योग',
    7: 'परमहंस विज्ञान योग',
    8: 'अक्षर ब्रह्म योग',
    9: 'राज विद्या योग',
    10: 'विभूति विस्तार योग',
    11: 'विश्वरूप दर्शन योग',
    12: 'भक्ति योग',
    13: 'क्षेत्र क्षेत्रज्ञ विभाग योग',
    14: 'गुणत्रय विभाग योग',
    15: 'पुरुषोत्तम प्राप्ति योग',
    16: 'दैवासुर सम्पद विभाग योग',
    17: 'श्रद्धात्रय विभाग योग',
    18: 'मोक्ष संन्यास योग',
  };
  
  return hindiTitles[chapterNumber] || `अध्याय ${chapterNumber}`;
}

/**
 * Language metadata
 */
export const LANGUAGE_META = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
  },
} as const;

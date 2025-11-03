/**
 * Video integration configuration for multilingual support
 */

export interface VideoLanguage {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: VideoLanguage[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', flag: '🇮🇳' },
];

/**
 * Social media configuration
 */
export const SOCIAL_MEDIA_LINKS = {
  instagram: 'https://www.instagram.com/gita_gyanaam/',
  youtube: 'https://www.youtube.com/@Gita_Gyanaam',
  facebook: 'https://www.facebook.com/profile.php?id=61577900636828',
};

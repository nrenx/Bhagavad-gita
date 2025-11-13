'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Languages, Play, ExternalLink } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '@/lib/content-utils';
import type { VerseVideoSourceMap } from '@/lib/verse-videos';

interface VideoPlayerProps {
  chapter: number;
  verse: number;
  videos: VerseVideoSourceMap;
  defaultLanguage?: string | null;
  className?: string;
}

export function VideoPlayer({
  chapter,
  verse,
  videos,
  defaultLanguage,
  className = '',
}: VideoPlayerProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const availableLanguages = useMemo(
    () => Object.keys(videos),
    [videos]
  );

  useEffect(() => {
    if (availableLanguages.length === 0) {
      setSelectedLanguage('');
      return;
    }

    if (defaultLanguage && videos[defaultLanguage]) {
      setSelectedLanguage(defaultLanguage);
      return;
    }

    if (!videos[selectedLanguage]) {
      setSelectedLanguage(availableLanguages[0]);
    }
  }, [availableLanguages, defaultLanguage, selectedLanguage, videos]);

  const languageMetaMap = useMemo(
    () => new Map(SUPPORTED_LANGUAGES.map((language) => [language.code, language])),
    []
  );

  const currentVideo = selectedLanguage ? videos[selectedLanguage] : undefined;

  const handleOpenPreview = () => {
    if (!currentVideo) return;
    window.open(`https://youtube.com/shorts/${currentVideo.videoId}`, '_blank', 'noopener');
  };

  return (
    <div className={className}>
      {currentVideo ? (
        <div className="space-y-3">
          {/* Language Selector - Always show */}
          {availableLanguages.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Languages className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span className="text-xs text-slate-600 mr-1">Language:</span>
              {availableLanguages.map((languageCode) => {
                const meta = languageMetaMap.get(languageCode);
                const label = meta ? `${meta.flag} ${meta.name}` : languageCode.toUpperCase();
                const isActive = selectedLanguage === languageCode;

                return (
                  <Button
                    key={languageCode}
                    size="sm"
                    variant={isActive ? 'default' : 'outline'}
                    onClick={() => setSelectedLanguage(languageCode)}
                    className={isActive ? 'bg-orange-500 hover:bg-orange-600' : ''}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          )}

          {/* Video Player */}
          <div className="relative w-full max-w-[225px] mx-auto h-[400px]">
            <div className="overflow-hidden rounded-xl border-2 border-slate-200 bg-black h-full shadow-lg">
              <iframe
                key={currentVideo.videoId}
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                title={currentVideo.title}
              />
            </div>
          </div>

          {/* Video Actions */}
          <div className="space-y-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleOpenPreview}
              className="w-full justify-center border-slate-300 hover:bg-slate-50"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Watch on YouTube
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-[225px] mx-auto h-[400px]">
          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 flex items-center justify-center h-full">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Play className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Video Coming Soon
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Commentary for Chapter {chapter}, Verse {verse} will be available soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

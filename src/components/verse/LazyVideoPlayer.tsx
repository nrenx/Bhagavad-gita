/**
 * Lazy-loaded video player wrapper for better performance
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { VideoPlayer } from './VideoPlayer';
import type { VerseVideoSourceMap } from '@/lib/verse-videos';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LazyVideoPlayerProps {
  chapter: number;
  verse: number;
  videos: VerseVideoSourceMap;
  defaultLanguage?: string | null;
  className?: string;
}

export function LazyVideoPlayer(props: LazyVideoPlayerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: '200px', // Load when within 200px of viewport
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  const handleLoadClick = () => {
    setIsVisible(true);
    setHasLoaded(true);
  };

  return (
    <div ref={containerRef} className={props.className}>
      {isVisible ? (
        <VideoPlayer {...props} />
      ) : (
        <div className="relative w-full max-w-[225px] mx-auto h-[400px]">
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 shadow-lg">
            <Button
              size="lg"
              onClick={handleLoadClick}
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-md"
            >
              <Play className="w-5 h-5 mr-2" />
              Load Video Commentary
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

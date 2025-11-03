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
        <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '9/16' }}>
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border border-orange-200">
            <Button
              size="lg"
              onClick={handleLoadClick}
              className="bg-white hover:bg-gray-50 text-orange-600 shadow-lg"
            >
              <Play className="w-6 h-6 mr-2" />
              Load Video Commentary
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

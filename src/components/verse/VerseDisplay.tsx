'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { VerseContent } from '@/lib/data';
import { Copy, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface VerseDisplayProps {
  chapter: number;
  verse: number;
  content: VerseContent;
  className?: string;
}

export function VerseDisplay({ chapter, verse, content, className = '' }: VerseDisplayProps) {
  const copyToClipboard = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${section} copied to clipboard`);
    } catch (error) {
      console.error('Failed to copy text:', error);
      toast.error('Failed to copy text');
    }
  };

  const shareVerse = async () => {
    const shareData = {
      title: `Bhagavad Gita - Chapter ${chapter}, Verse ${verse}`,
      text: `${content.sanskrit}\n\n${content.english}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(
          `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`,
          'Verse details'
        );
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className={`space-y-3 w-full ${className}`}>
      {/* Sanskrit Shloka Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Original Sanskrit
          </h3>
        </div>
        <div className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <p className="text-lg sm:text-xl md:text-2xl font-sanskrit leading-relaxed text-slate-900 whitespace-pre min-w-max">
            {content.sanskrit}
          </p>
        </div>
      </div>

      {/* Transliteration Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Transliteration
          </h3>
        </div>
        <div className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <p className="text-sm sm:text-base md:text-lg font-medium text-slate-700 leading-relaxed italic whitespace-pre min-w-max">
            {content.romanized}
          </p>
        </div>
      </div>

      {/* English Translation Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            English Translation
          </h3>
        </div>
        <div className="p-6">
          <p className="text-base md:text-lg leading-relaxed text-slate-800">
            {content.english}
          </p>
        </div>
      </div>

      {/* Word-by-Word Meaning Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Word-by-Word Meaning
          </h3>
        </div>
        <div className="p-6">
          <p className="text-sm md:text-base leading-relaxed text-slate-700 whitespace-pre-line">
            {content.wordByWord}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          onClick={shareVerse}
          size="lg"
          className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share This Verse
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => copyToClipboard(
            `Chapter ${chapter}, Verse ${verse}\n\n${content.sanskrit}\n\n${content.english}`,
            'Complete verse'
          )}
          className="flex-1 border-slate-300 hover:bg-slate-50"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Complete Verse
        </Button>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
    <Card className={`max-w-4xl mx-auto bg-gradient-to-br from-white to-slate-50 shadow-xl border-0 ${className}`}>
      <CardContent className="space-y-8 pt-6">
        {/* Sanskrit Shloka */}
        <div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-100">
            <p className="text-xs md:text-sm font-sanskrit leading-relaxed text-slate-800 whitespace-pre-line text-left">
              {content.sanskrit}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Romanized Transliteration */}
        <div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <p className="text-xs md:text-sm font-medium text-slate-700 leading-relaxed italic whitespace-pre-line text-left">
              {content.romanized}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* English Translation */}
        <div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <p className="text-xs md:text-sm leading-relaxed text-slate-700">
              {content.english}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Word-by-Word Translation */}
        <div>
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-100">
            <p className="text-xs md:text-sm leading-relaxed text-slate-700 whitespace-pre-line">
              {content.wordByWord}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={shareVerse}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share This Verse
          </Button>
          <Button
            variant="outline"
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
      </CardContent>
    </Card>
  );
}

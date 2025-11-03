/**
 * Related Verses component for internal linking and better navigation
 */

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';
import { RelatedVerse } from '@/lib/internal-links';

interface RelatedVersesProps {
  verses: RelatedVerse[];
  className?: string;
}

export function RelatedVerses({ verses, className = '' }: RelatedVersesProps) {
  if (verses.length === 0) {
    return null;
  }

  return (
    <Card className={`bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center text-slate-800">
          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
          Related Verses You May Find Helpful
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {verses.map((verse, index) => (
            <Link
              key={`${verse.chapter}-${verse.verse}`}
              href={`/chapters/${verse.chapter}/verse/${verse.verse}`}
              className="block group"
            >
              <div className="p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                        {verse.chapter}.{verse.verse}
                      </Badge>
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {verse.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {verse.reason}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Popular verses in chapter component
 */
interface PopularVersesProps {
  chapter: number;
  verses: Array<{ verse: number; title: string }>;
  className?: string;
}

export function PopularVersesInChapter({ chapter, verses, className = '' }: PopularVersesProps) {
  if (verses.length === 0) {
    return null;
  }

  return (
    <div className={`bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200 ${className}`}>
      <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center">
        <BookOpen className="w-4 h-4 mr-2 text-orange-600" />
        Key Verses in This Chapter
      </h4>
      <div className="flex flex-wrap gap-2">
        {verses.map(v => (
          <Link
            key={v.verse}
            href={`/chapters/${chapter}/verse/${v.verse}`}
            className="inline-block"
          >
            <Badge 
              variant="outline" 
              className="bg-white hover:bg-orange-100 border-orange-200 hover:border-orange-300 transition-colors cursor-pointer"
            >
              {v.title}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}

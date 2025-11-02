'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ChapterInfo } from '@/lib/data';
import { BookOpen, ArrowRight } from 'lucide-react';

interface ChapterCardProps {
  chapter: ChapterInfo;
  className?: string;
}

export function ChapterCard({ chapter, className = '' }: ChapterCardProps) {
  return (
    <Link href={`/chapters/${chapter.number}`}>
      <Card className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-orange-300 bg-white h-full ${className}`}>
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600" />
        
        {/* Card Content */}
        <div className="p-4 sm:p-6 flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
              {/* Chapter Number Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {chapter.number}
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-orange-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-orange-600" />
                </div>
              </div>
              
              {/* Chapter Title */}
              <div className="flex-1 min-w-0">
                <div className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-wide mb-0.5 sm:mb-1">
                  Chapter {chapter.number}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight line-clamp-2">
                  {chapter.title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-3 sm:mb-4" />
          
          {/* Verse Count Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                {chapter.verseCount} Verses
              </span>
            </div>
            <div className="flex items-center text-orange-500 group-hover:translate-x-1 transition-transform">
              <span className="text-xs font-semibold mr-1">Explore</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
          </div>
          
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-red-50/0 group-hover:from-orange-50/30 group-hover:to-red-50/30 transition-all duration-300 pointer-events-none" />
        </div>
      </Card>
    </Link>
  );
}

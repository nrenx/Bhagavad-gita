import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { getAllChapters, getChapterInfo, getChapterVerses } from '@/lib/data';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateChapterSchema, generateBreadcrumbSchema } from '@/lib/seo-structured-data';
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllChapters().map((chapter) => ({
    chapter: chapter.number.toString(),
  }));
}
import { 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Users,
  Sparkles,
  ChevronRight,
  Home
} from 'lucide-react';

type ChapterParams = {
  chapter: string;
};

interface ChapterPageProps {
  params: Promise<ChapterParams>;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { chapter } = await params;
  const chapterNumber = Number.parseInt(chapter, 10);
  const chapterInfo = getChapterInfo(chapterNumber);

  if (!chapterInfo) {
    return {
      title: 'Chapter Not Found - Bhagavad Gita',
    };
  }

  return {
    title: `Chapter ${chapterInfo.number}: ${chapterInfo.title} - Bhagavad Gita`,
    description: `${chapterInfo.description} - Complete chapter with ${chapterInfo.verseCount} verses, Sanskrit text, English translations, and commentary.`,
    keywords: [
      `Bhagavad Gita Chapter ${chapterInfo.number}`,
      chapterInfo.title,
      'Sanskrit verses',
      'spiritual wisdom',
      'Krishna teachings',
      'Hindu scripture',
      'yoga philosophy'
    ],
    openGraph: {
      title: `Chapter ${chapterInfo.number}: ${chapterInfo.title}`,
      description: chapterInfo.description,
      url: `/chapters/${chapterInfo.number}`,
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapter } = await params;
  const chapterNumber = Number.parseInt(chapter, 10);
  const chapterInfo = getChapterInfo(chapterNumber);

  if (!chapterInfo) {
    notFound();
    return null;
  }

  const verseNumbers = await getChapterVerses(chapterNumber);
  const hasNextChapter = chapterNumber < 18;
  const hasPrevChapter = chapterNumber > 1;

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chapters', url: '/chapters' },
    { name: `Chapter ${chapterNumber}`, url: `/chapters/${chapterNumber}` },
  ]);

  const chapterSchema = generateChapterSchema(
    chapterNumber,
    chapterInfo.title,
    chapterInfo.verseCount,
    chapterInfo.description
  );

  return (
    <>
      <StructuredData data={[breadcrumbSchema, chapterSchema]} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <main>
          {/* Breadcrumb */}
          <div className="bg-white border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
                  { label: 'Chapters', href: '/chapters' },
                  { label: `Chapter ${chapterNumber}`, href: `/chapters/${chapterNumber}` },
                ]}
              />
            </div>
          </div>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-red-50/30 to-pink-100/50" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-slate-800">Chapter {chapterNumber}</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  {chapterInfo.title}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                {chapterInfo.description}
              </p>

              {/* Chapter Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Badge variant="outline" className="text-base px-4 py-2 bg-white/80 border-orange-200">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {chapterInfo.verseCount} Verses
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2 bg-white/80 border-blue-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Sanskrit & English
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2 bg-white/80 border-purple-200">
                  <Play className="w-4 h-4 mr-2" />
                  Video Commentary
                </Badge>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                  <Link href={`/chapters/${chapterNumber}/verse/1`} className="flex items-center">
                    Start Reading
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-slate-300 hover:bg-slate-50">
                  <Link href="#verses-list" className="flex items-center">
                    Browse Verses
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Verses List */}
        <section id="verses-list" className="py-8 sm:py-16 bg-gradient-to-br from-slate-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2 sm:mb-4">
                  All Verses in Chapter {chapterNumber}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600">
                  Click on any verse to read the complete Sanskrit text, English translation, and commentary
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
                {verseNumbers.map((verseNumber) => (
                  <Link 
                    key={verseNumber}
                    href={`/chapters/${chapterNumber}/verse/${verseNumber}`}
                    className="group"
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-orange-300 bg-white cursor-pointer h-full">
                      <CardContent className="p-2 sm:p-3 flex flex-col items-center justify-center text-center">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mb-1 sm:mb-1.5 group-hover:shadow-lg transition-shadow">
                          {verseNumber}
                        </div>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors mb-0.5">
                          Verse {verseNumber}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 mb-0.5 sm:mb-1">
                          {chapterNumber}.{verseNumber}
                        </p>
                        <div className="flex items-center text-orange-500 group-hover:text-orange-600 transition-colors">
                          <span className="text-[9px] sm:text-[10px] font-medium">Read</span>
                          <ArrowRight className="ml-0.5 h-2 w-2 sm:h-2.5 sm:w-2.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Navigation */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Previous Chapter */}
                <div className="w-full sm:w-auto">
                  {hasPrevChapter ? (
                    <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-slate-300 hover:bg-slate-50">
                      <Link href={`/chapters/${chapterNumber - 1}`} className="flex items-center">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Previous Chapter
                      </Link>
                    </Button>
                  ) : (
                    <div className="w-full sm:w-auto"></div>
                  )}
                </div>

                {/* Back to Chapters */}
                <Button variant="ghost" asChild className="hover:bg-orange-50">
                  <Link href="/chapters" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    All Chapters
                  </Link>
                </Button>

                {/* Next Chapter */}
                <div className="w-full sm:w-auto">
                  {hasNextChapter ? (
                    <Button size="lg" asChild className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      <Link href={`/chapters/${chapterNumber + 1}`} className="flex items-center">
                        Next Chapter
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  ) : (
                    <div className="w-full sm:w-auto"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}

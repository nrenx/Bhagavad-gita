import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home, Book } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { VerseDisplay } from '@/components/verse/VerseDisplay'
import { LazyVideoPlayer } from '@/components/verse/LazyVideoPlayer'
import { PopularVersesInChapter } from '@/components/verse/RelatedVerses'
import { getAllVerseKeys, getChapterInfo, getAdjacentVerses } from '@/lib/data'
import { getVerseDataFromFiles } from '@/lib/verse-data'
import {
  getVerseVideoSources,
  resolveDefaultVideoLanguage,
} from '@/lib/verse-videos'
import { getPopularVersesInChapter } from '@/lib/internal-links'
import { StructuredData } from '@/components/seo/StructuredData'
import { 
  generateVerseArticleSchema, 
  generateBreadcrumbSchema,
  generateBookSchema 
} from '@/lib/seo-structured-data'

type VerseParams = {
  chapter: string
  verse: string
}

interface VersePageProps {
  params: Promise<VerseParams>
}

export async function generateMetadata({ params }: VersePageProps): Promise<Metadata> {
  const { chapter, verse } = await params
  const chapterNum = Number.parseInt(chapter, 10)
  const verseNum = Number.parseInt(verse, 10)
  
  if (isNaN(chapterNum) || isNaN(verseNum)) {
    return {
      title: 'Verse Not Found - Bhagavad Gita',
      description: 'The requested verse could not be found.'
    }
  }

  const chapterInfo = getChapterInfo(chapterNum)
  const verseData = getVerseDataFromFiles(chapterNum, verseNum)
  
  if (!chapterInfo || !verseData) {
    return {
      title: 'Verse Not Found - Bhagavad Gita',
      description: 'The requested verse could not be found.'
    }
  }

  const versePreview = verseData.english.length > 150 
    ? verseData.english.substring(0, 150) + '...'
    : verseData.english

  return {
    title: `Chapter ${chapterNum}, Verse ${verseNum} - ${chapterInfo.title} | Bhagvad Gita`,
    description: versePreview,
    keywords: [
      `Chapter ${chapterNum}`,
      `Verse ${verseNum}`,
      chapterInfo.title,
      'Bhagavad Gita',
      'Sanskrit',
      'Hindu scripture',
      'spiritual wisdom',
      'Krishna',
      'Arjuna'
    ],
    openGraph: {
      title: `Chapter ${chapterNum}, Verse ${verseNum} - ${chapterInfo.title}`,
      description: versePreview,
      type: 'article',
      url: `/chapter/${chapterNum}/verse/${verseNum}`,
      images: [
        {
          url: '/images/ACEE6900-5949-4291-A3C6-83379D7BDB4E_1_105_c.jpeg',
          width: 1200,
          height: 630,
          alt: `Bhagavad Gita Chapter ${chapterNum} Verse ${verseNum}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Chapter ${chapterNum}, Verse ${verseNum} - ${chapterInfo.title}`,
      description: versePreview,
      images: ['/images/ACEE6900-5949-4291-A3C6-83379D7BDB4E_1_105_c.jpeg']
    },
    alternates: {
      canonical: `/chapter/${chapterNum}/verse/${verseNum}`
    }
  }
}

export async function generateStaticParams() {
  return getAllVerseKeys().map(({ chapter, verse }) => ({
    chapter: chapter.toString(),
    verse: verse.toString()
  }))
}

export default async function VersePage({ params }: VersePageProps) {
  const { chapter, verse } = await params
  const chapterNum = Number.parseInt(chapter, 10)
  const verseNum = Number.parseInt(verse, 10)
  
  if (isNaN(chapterNum) || isNaN(verseNum)) {
    notFound()
    return null
  }

  const chapterInfo = getChapterInfo(chapterNum)
  const verseData = getVerseDataFromFiles(chapterNum, verseNum)
  
  if (!chapterInfo || !verseData) {
    notFound()
    return null
  }

  const { previousVerse, nextVerse } = getAdjacentVerses(chapterNum, verseNum)
  const verseVideos = getVerseVideoSources(chapterNum, verseNum)
  const defaultVideoLanguage = resolveDefaultVideoLanguage(verseVideos)
  const hasVideos = Object.keys(verseVideos).length > 0
  
  // Get popular verses for internal linking
  const popularVerses = getPopularVersesInChapter(chapterNum, verseNum)

  // Generate structured data for SEO
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chapters', url: '/chapters' },
    { name: `Chapter ${chapterNum}`, url: `/chapter/${chapterNum}` },
    { name: `Verse ${verseNum}`, url: `/chapter/${chapterNum}/verse/${verseNum}` },
  ])

  const articleSchema = generateVerseArticleSchema(
    chapterNum,
    verseNum,
    chapterInfo.title,
    {
      sanskrit: verseData.sanskrit,
      english: verseData.english,
      romanized: verseData.romanized,
    }
  )

  const bookSchema = generateBookSchema()

  return (
    <>
      <StructuredData data={[breadcrumbSchema, articleSchema, bookSchema]} />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-x-hidden">
        <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
            { label: 'Chapters', href: '/chapters', icon: <Book className="w-4 h-4" /> },
            { label: `Chapter ${chapterNum}`, href: `/chapter/${chapterNum}` },
            { label: `Verse ${verseNum}`, href: `/chapter/${chapterNum}/verse/${verseNum}` },
          ]}
          className="mb-8"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Verse Content */}
          <div className="space-y-6 min-w-0">
            <VerseDisplay 
              chapter={chapterNum}
              verse={verseNum}
              content={verseData}
            />
          </div>

          {/* Video Player and Navigation */}
          <div className="space-y-6 min-w-0">
            {/* Video Player */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Video Commentary
                  </h3>
                  <Badge variant={hasVideos ? "default" : "secondary"} className="text-xs">
                    {hasVideos ? 'Available' : 'Coming Soon'}
                  </Badge>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <LazyVideoPlayer 
                  chapter={chapterNum}
                  verse={verseNum}
                  videos={verseVideos}
                  defaultLanguage={defaultVideoLanguage}
                />
              </div>
            </div>

            {/* Chapter Context */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Chapter Context
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Summary</h4>
                    <p className="text-sm text-gray-600">{chapterInfo.summary}</p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Total Verses:</span>
                      <span className="ml-2 text-gray-600">{chapterInfo.verses}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Current:</span>
                      <span className="ml-2 text-gray-600">{verseNum} of {chapterInfo.verses}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-amber-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(verseNum / chapterInfo.verses) * 100}%` }}
                    />
                  </div>
                  
                  {/* Popular verses in this chapter */}
                  {popularVerses.length > 0 && (
                    <>
                      <Separator />
                      <PopularVersesInChapter 
                        chapter={chapterNum} 
                        verses={popularVerses}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 grid grid-cols-3 gap-3 items-center">
          {previousVerse ? (
            <Link 
              href={`/chapter/${previousVerse.chapter}/verse/${previousVerse.verse}`}
              className="justify-self-start"
            >
              <Button size="sm" variant="outline" className="group w-full sm:w-auto">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Previous Verse</span>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          <Link href={`/chapter/${chapterNum}`} className="justify-self-center">
            <Button size="sm" variant="secondary" className="w-full sm:w-auto">
              <Book className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="hidden sm:inline">Chapter Overview</span>
            </Button>
          </Link>

          {nextVerse ? (
            <Link 
              href={`/chapter/${nextVerse.chapter}/verse/${nextVerse.verse}`}
              className="justify-self-end"
            >
              <Button size="sm" variant="outline" className="group w-full sm:w-auto">
                <span className="hidden sm:inline">Next Verse</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}

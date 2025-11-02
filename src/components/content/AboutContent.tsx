import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Heart, Users, Globe, Award, Target, Lightbulb, Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

export function AboutContent() {

  const features = [
    {
      icon: Book,
      title: 'Complete Text',
      description: 'All 700+ verses with Sanskrit, transliteration, and English translations'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Video commentaries available in 10+ regional languages'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Open to feedback from scholars, students, and spiritual seekers worldwide'
    },
    {
      icon: Award,
      title: 'Authentic Sources',
      description: 'Translations from respected commentators and traditional sources'
    }
  ];

  const goals = [
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Make the Bhagavad Gita accessible to people of all backgrounds and technical abilities'
    },
    {
      icon: Lightbulb,
      title: 'Understanding',
      description: 'Provide comprehensive resources to help readers truly understand the teachings'
    },
    {
      icon: Heart,
      title: 'Preservation',
      description: 'Preserve and share this ancient wisdom for future generations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
              About This Project
            </Badge>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ancient Wisdom,{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Modern Experience
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A solo project dedicated to making the timeless teachings of the Bhagavad Gita accessible to everyone 
            through beautiful design, authentic translations, and comprehensive educational resources.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-orange-200">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">My Mission</CardTitle>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                To bridge the gap between ancient spiritual wisdom and modern digital accessibility, 
                creating a comprehensive platform that honors the traditional teachings while embracing 
                contemporary learning methods.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature I build serves these fundamental principles
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-3">
                      <goal.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Creator's Journey Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 text-center mb-6">
                The Journey Behind This Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  As a solo developer and creator, I envisioned a platform that would truly serve anyone 
                  who sincerely wishes to read, understand, and experience the Bhagavad Gita. This website 
                  is the culmination of that vision — a complete digital sanctuary dedicated to this timeless scripture.
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
                    AI-Powered Development
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    This entire project — from collecting verses to creating videos — was developed using 
                    AI technology combined with extensive research. The process included:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gathering authentic verse collections from traditional sources
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Generating comprehensive scripts for each of the 700+ verses
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Producing high-quality audio narrations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Creating complete video content for every single verse
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-blue-600" />
                    Accessibility & Reach
                  </h3>
                  <p className="leading-relaxed">
                    All verse videos have been uploaded as YouTube Shorts and are embedded directly on 
                    this website, enabling visitors to both read and listen to each verse seamlessly. 
                    With multi-language support, people from diverse backgrounds can freely access and 
                    connect with the Bhagavad Gita in their preferred language.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-blue-600" />
                    A Student's Dedication
                  </h3>
                  <p className="leading-relaxed">
                    As a B.Tech student without advanced programming expertise or professional tools, 
                    I embarked on this journey with determination and curiosity. Through AI assistance 
                    and continuous learning, I transformed this vision into reality — from website 
                    development to complete video production.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-amber-600" />
                    Your Feedback Matters
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    While AI is powerful, it can occasionally make minor errors. I encourage you to 
                    report any issues or suggest improvements you discover. Your contributions help 
                    make this resource better for everyone. You can contribute through my{' '}
                    <a 
                      href="https://github.com/nrenx/Bhagvad-gita-website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 font-medium underline"
                    >
                      GitHub repository
                    </a>
                    {' '}or reach me through the Connect With Our Community section below.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community & Contact Section */}
        <div id="connect" className="mb-16 scroll-mt-24">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Connect With Our Community
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I'm building this project in the open so seekers around the world can learn together. 
                Reach out, collaborate, or simply share how the Bhagavad Gita has touched your life.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    I welcome thoughtful discussions, translations, bug reports, and real-world stories 
                    from fellow practitioners. Every message helps refine this platform and keep it grounded 
                    in the needs of the community.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Share how you're studying the Gita or suggest resources that helped you
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborate on improving translations, pronunciations, or commentary
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Report typos, broken media, or accessibility issues so I can fix them quickly
                    </li>
                  </ul>

                  <div className="rounded-2xl border border-blue-100 bg-white/70 p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Contribute on GitHub</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Submit pull requests, open issues, or explore how everything fits together behind the scenes.
                    </p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a
                        href="https://github.com/nrenx/Bhagvad-gita-website"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Repository
                        <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-blue-100 bg-white/75 p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Send detailed feedback, share research, or request new features and resources.
                    </p>
                    <a
                      href="mailto:narendrabollineni2002@gmail.com"
                      className="block font-semibold text-blue-700 break-words"
                    >
                      narendrabollineni2002@gmail.com
                    </a>
                    <div className="mt-4">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href="mailto:narendrabollineni2002@gmail.com">
                          Send an Email
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-green-100 bg-white/75 p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Phone & WhatsApp</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Call or message for quick questions. The same number works for WhatsApp too.
                    </p>
                    <a
                      href="tel:+917989976214"
                      className="block font-semibold text-green-700"
                    >
                      +91 79899 76214
                    </a>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                        <a href="tel:+917989976214">
                          Call Now
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-200 hover:bg-green-50 text-green-700"
                        asChild
                      >
                        <a
                          href="https://wa.me/917989976214"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About the Bhagavad Gita Section */}
        <div className="mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-orange-200">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 text-center mb-6">
                About the Bhagavad Gita
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="grid lg:grid-cols-2 gap-8 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Scripture</h3>
                  <p className="mb-4">
                    The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture 
                    that is part of the epic Mahabharata. It is a conversation between Prince Arjuna 
                    and Lord Krishna, who serves as his charioteer.
                  </p>
                  <p className="mb-4">
                    Set on the battlefield of Kurukshetra, the Gita addresses the moral and philosophical 
                    dilemmas faced by Arjuna as he prepares for battle. Through their dialogue, Krishna 
                    reveals profound spiritual truths about life, duty, and the nature of reality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Universal Teachings</h3>
                  <p className="mb-4">
                    The Bhagavad Gita is renowned for its universal message that transcends religious 
                    boundaries. Its teachings on dharma (righteous duty), karma (action), and moksha 
                    (liberation) offer guidance for ethical living and spiritual growth.
                  </p>
                  <p className="mb-4">
                    The three main paths outlined in the Gita - Karma Yoga (path of action), 
                    Bhakti Yoga (path of devotion), and Jnana Yoga (path of knowledge) - provide 
                    frameworks for spiritual development suited to different temperaments and life situations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology & Approach Section */}
        <div className="mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-orange-200">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 text-center mb-6">
                My Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Content</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sanskrit verses with accurate transliteration
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Multiple traditional commentaries and interpretations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Word-by-word translations for deeper understanding
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cross-references with other Hindu scriptures
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Technology</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Responsive design for all devices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fast loading and offline reading capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advanced search and navigation features
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrated video and audio content
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Begin Your Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Start exploring the timeless wisdom of the Bhagavad Gita. Whether you're new to the 
                text or a longtime student, this platform offers resources for every level of understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700"
                  asChild
                >
                  <Link href="/chapters">
                    <Book className="w-5 h-5 mr-2" />
                    Start Reading
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-200 hover:bg-orange-50"
                  asChild
                >
                  <a href="mailto:narendrabollineni2002@gmail.com" className="inline-flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

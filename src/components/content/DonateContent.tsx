import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Mail, Phone, MessageCircle } from 'lucide-react';

export function DonateContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
              Support This Work
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Keep This Gita Project Free
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every contribution directly covers hosting, storage, and the countless hours I invest in
            researching, curating, and improving this solo Bhagavad Gita project. Your support keeps all
            700+ verses, videos, and learning resources available at no cost.
          </p>
        </div>

        {/* QR Placeholder */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-3">
              QR Contributions Coming Soon
            </CardTitle>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I am setting up a simple QR / UPI payment method. Until it is live, please reach out using the
              details below if you would like to contribute or need bank information.
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-2xl border-2 border-dashed border-orange-200 bg-white/60 p-12 text-center text-gray-500">
              QR code placeholder — check back soon for instant contributions.
            </div>
          </CardContent>
        </Card>

        {/* Direct Support */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-3">
              Contact Me to Donate
            </CardTitle>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Use any of these direct channels. I usually respond quickly and can confirm your support,
              share bank details, or answer questions about how the funds are used.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Request payment details, receipts, or collaborate on future improvements.
                </p>
                <a href="mailto:narendrabollineni2002@gmail.com" className="block font-semibold text-blue-700 break-words">
                  narendrabollineni2002@gmail.com
                </a>
                <div className="mt-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="mailto:narendrabollineni2002@gmail.com">Send Email</a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Phone &amp; WhatsApp</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Call or message for quick confirmations. The same number works on WhatsApp.
                </p>
                <a href="tel:+917989976214" className="block font-semibold text-green-700">
                  +91 79899 76214
                </a>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href="tel:+917989976214">Call Now</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-200 hover:bg-green-50 text-green-700"
                    asChild
                  >
                    <a href="https://wa.me/917989976214" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thanks */}
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
          <CardContent className="py-12 text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-10 h-10 text-orange-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Supporting This Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your generosity keeps this independent Bhagavad Gita platform alive, accurate, and expanding. Together we
              make it possible for anyone to study these teachings without barriers.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

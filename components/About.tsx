'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Trophy, Users, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care, using authentic Filipino recipes.',
    },
    {
      icon: Trophy,
      title: 'Quality First',
      description: 'We use only fresh, high-quality ingredients to ensure the best taste.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Serving our local community at Kanluran Night Market with pride.',
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Prepared daily from 3PM to 10PM to guarantee freshness.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Explore Now</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            About Crispy Corner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Crispy Corner by LDRR, we bring you the authentic taste of Filipino street food. 
            Located at Kanluran Night Market in Calauan, Laguna, we&apos;ve been serving our community 
            with delicious, affordable, and quality Filipino dishes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-secondary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary to-black border-2 border-primary shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-white/90 leading-relaxed mb-4 text-lg">
                Crispy Corner by LDRR started with a simple mission: to share the authentic flavors 
                of Filipino cuisine with our community. What makes us special is our commitment to 
                quality and authenticity - we serve exactly what we show, with no compromises.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                From our signature Crispy Kare-kare to our famous Crispy Dinuguan, every dish is 
                crafted with traditional recipes and modern techniques. We&apos;re proud to be part of 
                the Kanluran Night Market, bringing delicious food to our neighbors every evening.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

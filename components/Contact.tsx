'use client';

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Barangay Kanluran Hall', '48W6+XF3, Masiit', 'Calauan, Laguna'],
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['3:00 PM - 10:00 PM', 'Open Daily'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+63 977 334 8124'],
      link: 'tel:+639773348124',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['grafrafraftorres28@gmail.com'],
      link: 'mailto:grafrafraftorres28@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience authentic Filipino food at Kanluran Night Market. 
            We&apos;re open every evening to serve you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => (
            <Card key={info.title} className="hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary transition-colors font-medium"
                  >
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm">
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  info.details.map((detail, index) => (
                    <p key={index} className="text-gray-600 text-sm font-medium">
                      {detail}
                    </p>
                  ))
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardHeader className="bg-gray-50">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-xl text-gray-900">Find Us at Kanluran Night Market</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Barangay Kanluran Hall, 48W6+XF3, Masiit, Calauan, Laguna
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div style={{ height: '450px', width: '100%' }}>
                <Map />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

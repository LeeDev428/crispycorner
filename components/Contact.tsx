'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Kanluran Night Market', 'Calauan, Laguna, Philippines'],
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
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
            <Card key={info.title} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-secondary">{info.title}</CardTitle>
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

        {/* Map Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Find Us at Kanluran Night Market
                  </h3>
                  <p className="text-gray-600">
                    Calauan, Laguna, Philippines
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Look for the Crispy Corner stall when you visit the night market!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

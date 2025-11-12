'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Github, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  facebook: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Don Torres',
      role: 'Team Member',
      facebook: 'https://www.facebook.com/dontorresqwerty',
    },
    {
      name: 'Renzo Carmona',
      role: 'Team Member',
      facebook: 'https://www.facebook.com/renzo.carmona.904',
    },
    {
      name: 'Rett Malate',
      role: 'Team Member',
      facebook: 'https://www.facebook.com/rettmalate.21',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The dedicated people behind Crispy Corner who make every dish special.
          </p>
        </div>

        {/* Website Creator - Lee Rafael Torres */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gray-900 border-2 border-primary overflow-hidden shadow-xl">
            <CardContent className="p-8 md:p-10 bg-white">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center shadow-xl border-4 border-primary/20">
                    <span className="text-5xl font-bold text-white">LT</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Lee Rafael Torres</h3>
                  <p className="text-black font-bold text-xl mb-4">Aspiring Software Engineer</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    An experienced Software Engineer from Laguna, Philippines, passionate about programming 
                    and developing high-quality applications, websites, mobile apps, and systems using clean 
                    code and best practices.
                  </p>
                  <p className="text-gray-500 text-sm mb-6">Age: 21 | PUP Calauan Campus, Laguna</p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <Link
                      href="https://www.facebook.com/lee.torres.5496683/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://github.com/LeeDev428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/lee-torres-361168333/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://leedev.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                      aria-label="Personal Website"
                    >
                      <Globe className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Team Members</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="font-medium">Connect</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

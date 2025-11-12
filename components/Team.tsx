'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook } from 'lucide-react';
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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The dedicated people behind Crispy Corner who make every dish special.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-primary bg-white overflow-hidden">
              <CardHeader className="pb-6">
                <div className="mx-auto w-28 h-28 bg-gradient-to-br from-primary via-red-500 to-secondary rounded-full flex items-center justify-center mb-4 shadow-xl ring-4 ring-white">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-xl text-secondary">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 font-medium">{member.role}</p>
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="text-sm font-medium">Connect</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Github, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Crispy Corner</h3>
            <p className="text-sm leading-relaxed mb-4">
              Authentic Filipino street food served at Kanluran Night Market, Calauan, Laguna.
              Exactly as shown, exactly as served.
            </p>
            <p className="text-xs text-gray-400">by LDRR</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Kanluran Night Market</li>
              <li>Calauan, Laguna</li>
              <li>Philippines</li>
              <li className="pt-2">
                <a href="tel:+639773348124" className="hover:text-primary transition-colors">
                  +63 977 334 8124
                </a>
              </li>
              <li>
                <a href="mailto:grafrafraftorres28@gmail.com" className="hover:text-primary transition-colors break-all">
                  grafrafraftorres28@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Operating Hours</h3>
            <p className="text-sm mb-2">Open Daily</p>
            <p className="text-xl font-bold text-primary">3:00 PM - 10:00 PM</p>
          </div>
        </div>

        <Separator className="my-8 bg-primary/30" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} Crispy Corner by LDRR. All rights reserved.</p>
          <p className="mt-2">
            Website designed and developed by{' '}
            <Link
              href="https://leedev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Lee Rafael Torres
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

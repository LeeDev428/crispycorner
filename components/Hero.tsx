'use client';

import { Button } from '@/components/ui/button';
import { Flame, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-black pt-20">
      {/* Dark Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.05)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full border border-primary/30 animate-pulse">
              <Flame className="h-4 w-4" />
              <span className="text-sm font-semibold">Now Open at Kanluran Night Market!</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
               Crispy Corner
                <br />
              </h1>
              <p className="text-lg sm:text-xl text-white/70 font-light tracking-wide">
                by LDRR
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Experience authentic Filipino food at its finest. From crispy dinuguan to savory kare-kare, 
              we serve exactly as shown, exactly as promised.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base">
                <Link href="#menu">Shop Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-black/30 text-black hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base"
              >
                <Link href="#menu">Learn More</Link>
              </Button>
            </div>

            {/* Operating Hours */}
            <div className="flex items-center gap-3 text-white/70 pt-4">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-white">Open Daily: 3:00 PM - 10:00 PM</p>
                <p className="text-xs">Kanluran Night Market, Calauan, Laguna</p>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder for food images */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image placeholders with gradient overlays */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/50 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"></div>
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/30 to-secondary/50 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"></div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-500/30 to-secondary/50 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"></div>
                <div className="aspect-square bg-gradient-to-br from-amber-500/30 to-secondary/50 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"></div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border-4 border-primary">
              <p className="text-xs font-semibold text-secondary mb-1">EXACTLY AS SHOWN</p>
              <p className="text-2xl font-bold text-primary">100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}

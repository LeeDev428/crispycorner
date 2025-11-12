'use client';

import { Button } from '@/components/ui/button';
import { Flame, Clock } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 pt-20">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.03)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      
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

          {/* Right Content - Food Images */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-[320px]">
              <div className="grid grid-cols-2 gap-2">
                {/* Left Column */}
                <div className="space-y-2">
                  <div className="aspect-square rounded-md shadow-sm overflow-hidden border border-primary/20">
                    <Image
                      src="/menus/overloaddinuguan.png"
                      alt="Overload Dinuguan"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-md shadow-sm overflow-hidden border border-primary/20">
                    <Image
                      src="/menus/lemongrasstea.png"
                      alt="Lemongrass Tea"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-2 pt-4">
                  <div className="aspect-square rounded-md shadow-sm overflow-hidden border border-primary/20">
                    <Image
                      src="/menus/overloadkarekare.png"
                      alt="Overload Kare-kare"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square rounded-md shadow-sm overflow-hidden border border-primary/20">
                    <Image
                      src="/menus/siomaiwithrice.png"
                      alt="Siomai with Rice"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="relative mt-3 ml-3">
                <div className="inline-block bg-white rounded-md shadow-lg px-3 py-1.5 border-2 border-primary">
                  <p className="text-[10px] font-semibold text-gray-700">EXACTLY AS SHOWN</p>
                  <p className="text-base font-bold text-primary">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
  name: string;
  description?: string;
  category: string;
  price?: string;
  image?: string;
}

const menuItems: MenuItem[] = [
  // Sulit Meals/Add-ons
  { name: 'Fried Siomai', category: 'Sulit Meals/Add-ons', price: '₱35' },
  { name: 'Fried Siomai w/ Rice', category: 'Sulit Meals/Add-ons', price: '₱50', image: '/menus/siomaiwithrice.png' },
  { name: 'Lumpia', category: 'Sulit Meals/Add-ons', price: '₱30' },
  { name: 'Lumpia w/ Rice', category: 'Sulit Meals/Add-ons', price: '₱45', image: '/menus/lumpiawithrice.png' },
  
  // Crispy Dinuguan
  { name: 'Crispy Dinuguan', category: 'Crispy Dinuguan', price: '₱65', image: '/menus/dinuguanbagnet.png' },
  { name: 'Crispy Dinuguan w/ Rice', category: 'Crispy Dinuguan', price: '₱80', image: '/menus/dinuguanbagnet.png' },
  
  // Crispy Kare-kare
  { name: 'Crispy Kare-kare', category: 'Crispy Kare-kare', price: '₱70' },
  { name: 'Crispy Kare-kare w/ Rice', category: 'Crispy Kare-kare', price: '₱85' },
  { name: 'Crispy Kare-kare w/ Rice w/ Veggies', category: 'Crispy Kare-kare', price: '₱95', image: '/menus/karekarebagnetwithveggies.png' },
  
  // Overload Bagnet Specials
  { name: 'Kare-kare Overload', description: 'with 3 Lumpia, 3 Siomai', category: 'Overload Bagnet Specials', price: '₱150', image: '/menus/overloadkarekare.png' },
  { name: 'Dinuguan Overload', description: 'with 3 Lumpia, 3 Siomai', category: 'Overload Bagnet Specials', price: '₱145', image: '/menus/overloaddinuguan.png' },
  
  // Drinks
  { name: 'Bottled Water', category: 'Drinks', price: '₱15', image: '/menus/water.png' },
  { name: 'Coke Mismo', category: 'Drinks', price: '₱20', image: '/menus/coke.png' },
  { name: 'Lemon Grass Tea', category: 'Drinks', price: '₱25', image: '/menus/lemongrasstea.png' },
];

const categories = [
  'Sulit Meals/Add-ons',
  'Crispy Dinuguan',
  'Crispy Kare-kare',
  'Overload Bagnet Specials',
  'Drinks',
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Top Products</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic Filipino flavors, prepared fresh daily
          </p>
        </div>

        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category) => {
            const categoryItems = menuItems.filter((item) => item.category === category);
            
            return (
              <div key={category}>
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary">{category}</h3>
                  <div className="h-1 w-20 bg-primary mt-2"></div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryItems.map((item) => (
                    <Card key={item.name} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary overflow-hidden bg-white">
                      {/* Image */}
                      <div className="aspect-square relative overflow-hidden bg-gray-100">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-secondary/5">
                            <div className="text-secondary/20 text-6xl font-bold">CC</div>
                          </div>
                        )}
                        {item.price && (
                          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full shadow-lg">
                            <span className="font-bold text-sm">{item.price}</span>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-base font-semibold text-secondary leading-tight">{item.name}</CardTitle>
                        {item.description && (
                          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                        )}
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2 text-sm">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Order Now</span>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <div className="inline-block bg-secondary text-white px-8 py-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold flex items-center gap-3">
              <span className="text-primary text-2xl">✕</span>
              Exactly as shown, Exactly as served
              <span className="text-primary text-2xl">✕</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

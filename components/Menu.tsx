'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  category: string;
  price?: string;
}

const menuItems: MenuItem[] = [
  // Sulit Meals/Add-ons
  { name: 'Fried Siomai', category: 'Sulit Meals/Add-ons', price: '₱35' },
  { name: 'Fried Siomai w/ Rice', category: 'Sulit Meals/Add-ons', price: '₱50' },
  { name: 'Lumpia', category: 'Sulit Meals/Add-ons', price: '₱30' },
  { name: 'Lumpia w/ Rice', category: 'Sulit Meals/Add-ons', price: '₱45' },
  
  // Crispy Dinuguan
  { name: 'Crispy Dinuguan', category: 'Crispy Dinuguan', price: '₱65' },
  { name: 'Crispy Dinuguan w/ Rice', category: 'Crispy Dinuguan', price: '₱80' },
  
  // Crispy Kare-kare
  { name: 'Crispy Kare-kare', category: 'Crispy Kare-kare', price: '₱70' },
  { name: 'Crispy Kare-kare w/ Rice', category: 'Crispy Kare-kare', price: '₱85' },
  { name: 'Crispy Kare-kare w/ Rice w/ Veggies', category: 'Crispy Kare-kare', price: '₱95' },
  
  // Overload Bagnet Specials
  { name: 'Kare-kare Overload', description: 'with 3 Lumpia, 3 Siomai', category: 'Overload Bagnet Specials', price: '₱150' },
  { name: 'Dinuguan Overload', description: 'with 3 Lumpia, 3 Siomai', category: 'Overload Bagnet Specials', price: '₱145' },
  
  // Drinks
  { name: 'Bottled Water', category: 'Drinks', price: '₱15' },
  { name: 'Coke Mismo', category: 'Drinks', price: '₱20' },
  { name: 'Lemon Grass Tea', category: 'Drinks', price: '₱25' },
];

const categories = [
  { name: 'Sulit Meals/Add-ons', color: 'from-primary to-red-600' },
  { name: 'Crispy Dinuguan', color: 'from-secondary to-gray-900' },
  { name: 'Crispy Kare-kare', color: 'from-orange-500 to-amber-600' },
  { name: 'Overload Bagnet Specials', color: 'from-red-500 to-primary' },
  { name: 'Drinks', color: 'from-primary to-pink-500' },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Top Products</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic Filipino flavors, prepared fresh daily
          </p>
        </div>

        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 mb-8 shadow-lg`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems
                  .filter((item) => item.category === category.name)
                  .map((item) => (
                    <Card key={item.name} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
                      {/* Image Placeholder */}
                      <div className={`aspect-square bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/80 text-6xl font-bold opacity-20">CC</div>
                        </div>
                        {/* Coming Soon Badge for images */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-xs font-semibold text-secondary">Photo Soon</p>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                          {item.price && (
                            <span className="text-primary font-bold text-xl">{item.price}</span>
                          )}
                        </div>
                        {item.description && (
                          <CardDescription className="text-sm">
                            {item.description}
                          </CardDescription>
                        )}
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Order Now</span>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-20">
          <div className="inline-block bg-secondary text-white px-8 py-6 rounded-2xl shadow-2xl border-4 border-primary">
            <p className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <span className="text-primary text-3xl">✕</span>
              Exactly as shown, Exactly as served
              <span className="text-primary text-3xl">✕</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

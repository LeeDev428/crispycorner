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
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Top Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Menu
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Authentic Filipino flavors, prepared fresh daily
          </p>
        </div>

        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto space-y-10">
          {categories.map((category) => {
            const categoryItems = menuItems.filter((item) => item.category === category);
            
            return (
              <div key={category}>
                {/* Category Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                  <div className="h-0.5 w-16 bg-primary mt-1"></div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
                  {categoryItems.map((item) => (
                    <Card key={item.name} className="group hover:shadow-sm transition-all duration-300 border border-gray-200 hover:border-primary overflow-hidden bg-white">
                      {/* Image */}
                      <div className="aspect-square relative overflow-hidden bg-gray-100">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                            <div className="text-gray-400 text-2xl font-bold">CC</div>
                          </div>
                        )}
                        {item.price && (
                          <div className="absolute top-1 right-1 bg-primary text-white px-1 py-0.5 rounded-full shadow-sm">
                            <span className="font-bold text-[9px]">{item.price}</span>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-1 px-1.5 pt-1.5">
                        <CardTitle className="text-[10px] font-semibold text-gray-900 leading-tight line-clamp-2">{item.name}</CardTitle>
                        {item.description && (
                          <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                        )}
                      </CardHeader>

                      <CardContent className="pt-0 px-1.5 pb-1.5">
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white gap-0.5 text-[9px] py-0.5 h-5">
                          <ShoppingCart className="h-2 w-2" />
                          <span>Order</span>
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
        <div className="text-center mt-12">
       
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Y2K HERO COMPONENT
 * Retro-futuristic hero section with mocktails and CTA
 */

export const Y2KHero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/hero-mocktails.jpg"
          alt="Y2K Mocktails"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="glass-effect y2k-border rounded-full px-6 py-2">
              <span className="y2k-text-gradient text-sm font-bold uppercase tracking-wider">
                Zero-Proof • Full Flavor
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-foreground">
              The Future of
            </span>
            <span className="block y2k-text-gradient">
              Mocktails is Here
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Premium non-alcoholic spirits and ready-to-mix beverages. 
            Experience sophisticated flavors without the alcohol.
          </p>

          {/* CTA */}
          <Button 
            onClick={scrollToProducts}
            size="lg"
            className="y2k-gradient y2k-glow text-lg font-bold px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-200"
          >
            Discover Flavors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="y2k-text-gradient text-2xl font-black">0%</div>
              <div className="text-sm text-muted-foreground mt-1">Alcohol</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="y2k-text-gradient text-2xl font-black">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Flavor</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <div className="y2k-text-gradient text-2xl font-black">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Y2K Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 y2k-gradient rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 y2k-gradient rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};
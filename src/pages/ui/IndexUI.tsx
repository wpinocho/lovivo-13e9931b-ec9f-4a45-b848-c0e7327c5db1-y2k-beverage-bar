import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Y2KHero } from '@/components/Y2KHero';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * Y2K themed zero-proof bar homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Y2K Hero Section */}
      <Y2KHero />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-20 relative">
          {/* Y2K Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl opacity-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-block glass-effect y2k-border rounded-full px-6 py-2 mb-4">
                <span className="y2k-text-gradient text-sm font-bold uppercase tracking-wider">
                  Collections
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Explore Our Range
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="group">
                  <div className="glass-effect rounded-2xl p-1 hover:y2k-glow transition-shadow duration-300">
                    <CollectionCard 
                      collection={collection} 
                      onViewProducts={handleViewCollectionProducts} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-block glass-effect y2k-border rounded-full px-6 py-2 mb-4">
                <span className="y2k-text-gradient text-sm font-bold uppercase tracking-wider">
                  {selectedCollectionId 
                    ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                    : 'Featured Products'
                  }
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                {selectedCollectionId 
                  ? 'Collection Highlights' 
                  : 'Zero-Proof Excellence'
                }
              </h2>
            </div>
            {selectedCollectionId && (
              <button
                onClick={handleShowAllProducts}
                className="glass-effect y2k-border rounded-xl px-6 py-3 font-bold hover:y2k-glow transition-shadow duration-200"
              >
                <span className="y2k-text-gradient">View All</span>
              </button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="glass-effect rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="rounded-2xl overflow-hidden hover:y2k-glow transition-shadow duration-300">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="glass-effect rounded-2xl p-12 inline-block">
                <p className="text-muted-foreground text-lg">
                  No products available in this collection.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};
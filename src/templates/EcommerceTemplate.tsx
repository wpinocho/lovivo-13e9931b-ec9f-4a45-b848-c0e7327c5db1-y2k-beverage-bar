import { ReactNode, useState } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, X, ChevronDown, Sparkles, Wine, Book, Package } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { collections, hasCollections, loading: loadingCollections } = useCollections()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)

  const header = (
    <div className={`sticky top-0 z-50 py-4 glass-effect y2k-border-bottom ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              <Link 
                to="/"
                className="px-4 py-2 rounded-lg font-bold text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                Home
              </Link>
              
              {!loadingCollections && hasCollections && (
                <div 
                  className="relative"
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => setCollectionsOpen(false)}
                >
                  <button className="px-4 py-2 rounded-lg font-bold text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-2">
                    <Wine className="h-4 w-4 text-primary" />
                    Collections
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  {collectionsOpen && collections && collections.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-72 glass-effect y2k-border rounded-xl p-4 shadow-2xl y2k-glow animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="space-y-2">
                        {collections.map((collection) => (
                          <ScrollLink
                            key={collection.id}
                            to="/#collections"
                            className="block px-4 py-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                          >
                            <div className="font-bold text-foreground group-hover:y2k-text-gradient transition-all">
                              {collection.name}
                            </div>
                            {collection.description && (
                              <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                {collection.description}
                              </div>
                            )}
                          </ScrollLink>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <ScrollLink
                          to="/#collections"
                          className="block px-4 py-2 rounded-lg text-center font-bold y2k-gradient hover:opacity-90 transition-opacity"
                        >
                          View All Collections
                        </ScrollLink>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <ScrollLink 
                to="/#products"
                className="px-4 py-2 rounded-lg font-bold text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-2"
              >
                <Package className="h-4 w-4 text-primary" />
                Products
              </ScrollLink>
              
              <Link 
                to="/blog"
                className="px-4 py-2 rounded-lg font-bold text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-2"
              >
                <Book className="h-4 w-4 text-primary" />
                Blog
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:scale-110 transition-transform duration-200"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 y2k-gradient text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden hover:bg-muted/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in slide-in-from-top-4 duration-300">
            <nav className="space-y-2">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                Home
              </Link>
              
              {!loadingCollections && hasCollections && collections && collections.length > 0 && (
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-foreground">
                    <Wine className="h-5 w-5 text-primary" />
                    Collections
                  </div>
                  <div className="pl-8 space-y-1">
                    {collections.map((collection) => (
                      <ScrollLink
                        key={collection.id}
                        to="/#collections"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                      >
                        {collection.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              )}
              
              <ScrollLink 
                to="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                <Package className="h-5 w-5 text-primary" />
                Products
              </ScrollLink>
              
              <Link 
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                <Book className="h-5 w-5 text-primary" />
                Blog
              </Link>
            </nav>
          </div>
        )}

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`relative overflow-hidden py-16 ${footerClassName}`}>
      {/* Y2K Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <BrandLogoLeft />
            <p className="mt-4 text-muted-foreground">
              Zero-proof beverages for the modern mixologist
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-medium">
            &copy; 2025 Zero-Proof Bar. <span className="y2k-text-gradient">All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}
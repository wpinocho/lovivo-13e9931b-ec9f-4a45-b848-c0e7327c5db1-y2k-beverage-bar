import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * Y2K themed newsletter section
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="relative py-20 overflow-hidden">
          {/* Y2K Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 y2k-gradient rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="y2k-gradient y2k-glow rounded-full p-4">
                    <Mail className="h-10 w-10 text-background" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black">
                  <span className="y2k-text-gradient">Thanks</span> for subscribing!
                </h3>
                <p className="text-lg text-muted-foreground">
                  You'll receive our best zero-proof offers soon.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-block glass-effect y2k-border rounded-full px-6 py-2 mb-2">
                    <span className="y2k-text-gradient text-sm font-bold uppercase tracking-wider">
                      Newsletter
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-foreground">
                    Stay in the Loop
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Get exclusive offers, recipes, and zero-proof inspiration
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 glass-effect border-border"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="y2k-gradient font-bold px-8 hover:scale-105 transition-transform duration-200"
                  >
                    {logic.isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive font-medium">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};
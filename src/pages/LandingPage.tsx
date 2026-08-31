import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import ToolsSection from '@/components/landing/ToolsSection';
import TrustStrip from '@/components/landing/TrustStrip';
import PricingSection from '@/components/landing/PricingSection';
import CtaSection from '@/components/landing/CtaSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ToolsSection />
        <TrustStrip />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

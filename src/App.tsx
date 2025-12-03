import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeHighlights from './components/MarqueeHighlights';
import FeaturesSection from './components/FeaturesSection';
import WhyUsSection from './components/WhyUsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeHighlights />
        <FeaturesSection />
        <WhyUsSection />
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


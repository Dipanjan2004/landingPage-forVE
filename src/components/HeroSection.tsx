import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chatMockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (subheadingRef.current) {
        gsap.from(subheadingRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          delay: 0.6,
        });
      }

      if (chatMockRef.current) {
        gsap.from(chatMockRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-highlight/20 to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">AI-Powered Customer Support</span>
          </div>
          
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            AI Chatbots That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Transform
            </span>{' '}
            Your Business
          </h1>
          <p
            ref={subheadingRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Provide 24/7 support, generate leads, and automate customer interactions
            with AI-powered chatbots trained on your business data.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Get Started
            </button>
            <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-200 shadow-md hover:shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>

        <div ref={chatMockRef} className="flex justify-center lg:justify-end relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 transform scale-110"></div>
          
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ChatFlow Assistant</h3>
                <p className="text-sm text-gray-500">Online • Ready to help</p>
              </div>
            </div>

            <div className="space-y-4 h-64 overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0"></div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-gray-700">Hello! How can I help you today?</p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                  <p className="text-sm">I'm looking for pricing information</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0"></div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Great! We offer flexible pricing plans starting at $99/month. Would you like to see our features?
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                  <p className="text-sm">Yes, please!</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


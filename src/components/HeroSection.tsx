import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Orb from './Orb';

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
        const buttons = ctaRef.current.children;
        Array.from(buttons).forEach((button) => {
          (button as HTMLElement).style.opacity = '1';
          (button as HTMLElement).style.visibility = 'visible';
        });
        
        gsap.from(buttons, {
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
      className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-highlight/20 to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] opacity-30 sm:opacity-40 md:opacity-50 pointer-events-auto">
          <Orb
            hoverIntensity={2.0}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">Intelligent Customer Support</span>
          </div>
          
          <h1
            ref={headingRef}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 drop-shadow-lg"
          >
            Chatbots That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Transform
            </span>{' '}
            Your Business
          </h1>
          <p
            ref={subheadingRef}
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 font-medium drop-shadow-md"
          >
            Provide 24/7 support, generate leads, and automate customer interactions with intelligent chatbots.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
            <button 
              className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto backdrop-blur-sm relative z-30"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              Get Started
            </button>
            <button 
              className="bg-white/90 backdrop-blur-sm text-primary border-2 border-primary px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto relative z-30"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div ref={chatMockRef} className="flex justify-center lg:justify-end relative z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 transform scale-110"></div>
          
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 border border-gray-100 relative mx-auto lg:mx-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
CF
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ChatFlow Assistant</h3>
                <p className="text-sm text-gray-500">Online • Ready to help</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 h-48 sm:h-56 md:h-64 overflow-y-auto">
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

            <div className="flex gap-2 pt-3 sm:pt-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <button className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm sm:text-base">
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


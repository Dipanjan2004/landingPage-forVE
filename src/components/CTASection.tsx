import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-highlight relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-highlight rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-white/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sparkle icon */}
        <div className="inline-block mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg px-2 sm:px-0">
          Ready to Launch Your{' '}
          <span className="text-highlight drop-shadow-md">AI Chatbot?</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6 max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
          Join thousands of businesses using ChatFlow AI. Get started in 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
            <span>Start Free Trial</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="bg-transparent text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Schedule a Demo</span>
          </button>
        </div>
        <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 px-4 sm:px-0">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeHighlights = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.from(marqueeRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const highlights = [
    '24/7 AI Support',
    'Reduce Support Costs by 60%',
    'Train on Your Own Data',
    'Multi-language Chatbots',
    'Instant Response Time',
    'Seamless Integration',
    'Advanced Analytics',
    'Custom AI Training',
  ];

  const duplicatedHighlights = [...highlights, ...highlights];

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-gradient-to-r from-highlight/30 via-white to-accent/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div ref={marqueeRef} className="relative z-10">
        <div className="text-center mb-4 sm:mb-6">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            ✨ Key Benefits
          </span>
        </div>
        <div
          className="flex gap-3 sm:gap-4 animate-marquee hover:pause"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          {duplicatedHighlights.map((highlight, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white shadow-lg border-2 border-primary/30 flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-200 hover:border-primary hover:shadow-xl"
            >
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></span>
              <span className="font-semibold text-gray-800 whitespace-nowrap text-xs sm:text-sm md:text-base">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MarqueeHighlights;


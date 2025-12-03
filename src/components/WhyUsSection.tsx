import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const advantages = [
    'Trained on your business data',
    'Human-like responses',
    'Transparent pricing',
    'Fast onboarding (24 hours)',
    'Dedicated support team',
    'Custom integrations available',
    'Regular model updates',
    'No hidden fees',
  ];

  const comparisonData = [
    { feature: 'Custom Training', us: '✓', competitor: 'Limited' },
    { feature: 'Response Quality', us: 'Human-like', competitor: 'Generic' },
    { feature: 'Onboarding Time', us: '24 hours', competitor: '2-4 weeks' },
    { feature: 'Pricing Transparency', us: 'Clear & upfront', competitor: 'Complex tiers' },
    { feature: 'Support', us: 'Dedicated team', competitor: 'Ticket system' },
    { feature: 'Data Privacy', us: 'Your data stays yours', competitor: 'Shared models' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-white to-highlight/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
              🏆 Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2 sm:px-0">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                ChatFlow AI
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
              See how we compare to generic chatbot providers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          <div ref={leftRef}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-200 shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 group-hover:text-primary transition-colors duration-200">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={rightRef}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              ChatFlow AI vs. Generic Providers
            </h3>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary">
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-white font-semibold text-xs sm:text-sm md:text-base">
                        Feature
                      </th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-white font-semibold text-xs sm:text-sm md:text-base">
                        ChatFlow AI
                      </th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-white font-semibold text-xs sm:text-sm md:text-base">
                        Generic Providers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-gray-900 text-xs sm:text-sm md:text-base">
                          {row.feature}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                          <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-accent to-primary/20 text-primary font-semibold text-xs sm:text-sm shadow-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {row.us}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-gray-600 text-xs sm:text-sm md:text-base">
                          {row.competitor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;


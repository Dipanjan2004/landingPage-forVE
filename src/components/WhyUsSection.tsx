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
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-white to-highlight/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-primary font-semibold text-sm mb-6">
            🏆 Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ChatFlow AI
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            See how we compare to generic chatbot providers
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            We're not just another chatbot platform. We're your AI partner, committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={leftRef}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h3>
            <ul className="space-y-4">
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
                  <span className="text-lg text-gray-700 group-hover:text-primary transition-colors duration-200">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={rightRef}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ChatFlow AI vs. Generic Providers
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary">
                      <th className="px-6 py-4 text-left text-white font-semibold">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-white font-semibold">
                        ChatFlow AI
                      </th>
                      <th className="px-6 py-4 text-center text-white font-semibold">
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
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-primary/20 text-primary font-semibold text-sm shadow-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {row.us}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">
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


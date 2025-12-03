import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
}

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI training',
        'Email support',
        'Website integration',
        'Basic analytics',
        'Single language support',
      ],
      ctaText: 'Get Started',
    },
    {
      name: 'Growth',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'Multi-channel integration',
        'Advanced analytics',
        'Multi-language support',
        'Custom integrations',
        'Dedicated account manager',
      ],
      ctaText: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        '24/7 dedicated support',
        'All integrations',
        'Custom analytics & reporting',
        'All languages',
        'White-label options',
        'SLA guarantee',
        'Custom contract terms',
      ],
      ctaText: 'Contact Sales',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current && sectionRef.current) {
        const cards = cardsRef.current.children;
        Array.from(cards).forEach((card) => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
        });

        gsap.from(cards, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });

        const featuredCard = Array.from(cards).find((_, i) => pricingPlans[i]?.featured);
        if (featuredCard) {
          featuredCard.addEventListener('mouseenter', () => {
            gsap.to(featuredCard, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          featuredCard.addEventListener('mouseleave', () => {
            gsap.to(featuredCard, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-accent/5 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-secondary/20 to-highlight/20 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
              💰 Flexible Plans
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2 sm:px-0">
              Simple, Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Pricing
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
              Choose the plan that fits your business. 14-day free trial. No credit card required.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          style={{ opacity: 1 }}
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-primary to-secondary text-white border-2 sm:border-4 border-secondary lg:scale-105 z-10 hover:scale-110'
                  : 'bg-white text-gray-900 border border-gray-200 hover:shadow-2xl hover:scale-105'
              }`}
              style={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <span>⭐</span>
                  <span>Most Popular</span>
                </div>
              )}
              
              {!plan.featured && (
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl opacity-50"></div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                <p className={`text-xs sm:text-sm ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`ml-2 text-lg ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'text-white' : 'text-primary'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.featured ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                    : 'bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg'
                }`}
              >
                <span>{plan.ctaText}</span>
                {!plan.featured && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


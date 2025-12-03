import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current && sectionRef.current) {
        const cards = cardsRef.current.children;
        
        Array.from(cards).forEach((card) => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0)';
        });

        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
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

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      quote:
        'ChatFlow AI reduced our response time from hours to seconds and cut support costs by 65%. The ROI was immediate.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      company: 'Global Retail Co.',
      quote:
        'The custom training feature is incredible. Our chatbot handles 80% of inquiries without human intervention.',
      avatar: '👨‍💼',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      company: 'SaaS Solutions',
      quote:
        'Integration was seamless. Our customer satisfaction scores increased by 40% with real-time insights.',
      avatar: '👩‍💻',
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'E-commerce Plus',
      quote:
        'Best investment this year. We\'ve expanded to 15 countries without hiring additional support staff.',
      avatar: '👨‍💻',
    },
  ];

  const companyLogos = [
    'TechStart Inc.',
    'Global Retail Co.',
    'SaaS Solutions',
    'E-commerce Plus',
    'Innovation Labs',
    'Digital Dynamics',
    'CloudScale Systems',
    'DataFlow Analytics',
    'NextGen Solutions',
    'SmartTech Industries',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-highlight/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/20 to-highlight/20 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
              ⭐ Customer Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2 sm:px-0">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Industry Leaders
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
              See what our customers have to say about ChatFlow AI
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8" style={{ opacity: 1 }}>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg sm:rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
              <span>10K+</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Active Users</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-lg sm:rounded-xl border border-accent/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
              <span>98%</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg sm:rounded-xl border border-secondary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
              <span>50+</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Countries Served</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-lg sm:rounded-xl border border-highlight/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
              <span>24hr</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Avg Setup Time</div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8"
          style={{ opacity: 1 }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group relative overflow-hidden hover:scale-[1.02]"
              style={{ opacity: 1, transform: 'translateY(0)' }}
            >
              {(() => {
                const gradients = [
                  'from-primary to-secondary',
                  'from-secondary to-highlight',
                  'from-accent to-primary',
                  'from-primary to-accent',
                  'from-secondary to-primary',
                  'from-highlight to-secondary',
                ];
                const gradient = gradients[index % gradients.length];
                return (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
                  </>
                );
              })()}
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const gradients = [
                      'from-primary to-secondary',
                      'from-secondary to-highlight',
                      'from-accent to-primary',
                      'from-primary to-accent',
                      'from-secondary to-primary',
                      'from-highlight to-secondary',
                    ];
                    const gradient = gradients[index % gradients.length];
                    return (
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-white`}>
                        <span className="relative z-10">{testimonial.avatar}</span>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                    );
                  })()}
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed italic relative mb-3">
                  <span className="text-4xl text-primary/20 absolute -top-2 -left-2 font-serif">"</span>
                  <span className="relative z-10 pl-3">{testimonial.quote}</span>
                  <span className="text-4xl text-primary/20 absolute -bottom-4 -right-1 font-serif">"</span>
                </p>
                {(() => {
                  const gradients = [
                    'from-primary to-secondary',
                    'from-secondary to-highlight',
                    'from-accent to-primary',
                    'from-primary to-accent',
                    'from-secondary to-primary',
                    'from-highlight to-secondary',
                  ];
                  const gradient = gradients[index % gradients.length];
                  return (
                    <div className={`mt-2 inline-block px-2 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-xs font-semibold text-gray-700`}>
                      {testimonial.company}
                    </div>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-primary">Trusted by leading companies worldwide</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 p-4">
            <div
              className="flex gap-6 animate-marquee"
              style={{
                animation: 'marquee 25s linear infinite',
              }}
            >
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-base whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
      `}</style>
    </section>
  );
};

export default TestimonialsSection;


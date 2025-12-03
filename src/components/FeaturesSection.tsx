import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainIcon, MobileIcon, AnalyticsIcon, ChatIcon, PlugIcon, LockIcon } from './icons/FeatureIcons';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const FeaturesSection = () => {
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
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features: Feature[] = [
    {
      title: 'Custom Training',
      description:
        'Train your chatbot on your business data, documents, and knowledge base for accurate, context-aware responses.',
      icon: <BrainIcon />,
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Omnichannel Support',
      description:
        'Deploy your chatbot across websites, mobile apps, messaging platforms, and social media channels.',
      icon: <MobileIcon />,
      gradient: 'from-secondary to-highlight',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Track conversations, measure performance, and gain insights into customer interactions and satisfaction.',
      icon: <AnalyticsIcon />,
      gradient: 'from-accent to-primary',
    },
    {
      title: 'Natural Language Processing',
      description:
        'Advanced NLP capabilities that understand context, intent, and sentiment for human-like conversations.',
      icon: <ChatIcon />,
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Easy Integration',
      description:
        'Simple API and SDK integrations. Connect with your existing CRM, helpdesk, and business tools in minutes.',
      icon: <PlugIcon />,
      gradient: 'from-secondary to-primary',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-level encryption, GDPR compliance, and SOC 2 certified infrastructure to protect your data.',
      icon: <LockIcon />,
      gradient: 'from-accent to-secondary',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-highlight/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-accent/30 to-primary/20 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
              ✨ Powerful Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
              Powerful Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
                Modern Businesses
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
              Everything you need to build, deploy, and scale intelligent customer support with cutting-edge technology.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch"
          style={{ gridAutoRows: '1fr', opacity: 1 }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-7 md:p-8 lg:p-9 shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-transparent hover:border-primary/40 group relative overflow-hidden flex flex-col hover:scale-[1.04] hover:-translate-y-2"
              style={{ 
                minHeight: '100%', 
                opacity: 1, 
                transform: 'translateY(0)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-12 transition-opacity duration-700`}></div>
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110`}></div>
              <div className={`absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-8 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110`}></div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700"></div>
              
              <div className="relative mb-6 flex items-start justify-between">
                <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-15 group-hover:bg-opacity-25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 flex-shrink-0 shadow-lg group-hover:shadow-xl border-2 border-white/50`}>
                  <div className="text-primary relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-700`}></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                </div>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 rounded-bl-3xl transition-all duration-700 group-hover:scale-110`}></div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 group-hover:animate-pulse"></div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 relative z-10 flex-shrink-0 group-hover:text-primary transition-all duration-500 leading-tight">
                <span className="relative inline-block">
                  {feature.title}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}></span>
                </span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10 flex-grow mb-6 group-hover:text-gray-800 transition-colors duration-500">{feature.description}</p>
              
              <div className="relative z-10 mt-auto pt-5 border-t-2 border-gray-100 group-hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-bold uppercase tracking-wide">Explore</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center transform scale-0 group-hover:scale-100`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-tl-full transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


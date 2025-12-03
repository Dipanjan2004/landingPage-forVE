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
      title: 'Custom AI Training',
      description:
        'Train your chatbot on your business data, documents, and knowledge base for accurate, context-aware responses.',
      icon: <BrainIcon />,
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Omnichannel Support',
      description:
        'Deploy your AI chatbot across websites, mobile apps, messaging platforms, and social media channels.',
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
              Everything you need to build, deploy, and scale AI-powered customer support with cutting-edge technology.
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
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group relative overflow-hidden flex flex-col hover:scale-[1.02]"
              style={{ minHeight: '100%', opacity: 1, transform: 'translateY(0)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-500`}></div>
              
              <div className={`relative mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 relative z-10 flex-shrink-0">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10 flex-grow">{feature.description}</p>
              
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


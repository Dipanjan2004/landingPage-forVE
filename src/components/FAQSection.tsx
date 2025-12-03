import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        const items = itemsRef.current.children;
        Array.from(items).forEach((item) => {
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateY(0)';
        });

        gsap.from(items, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
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

  const faqs: FAQItem[] = [
    {
      question: 'How quickly can I get started?',
      answer:
        'You can get started in 24 hours! Our streamlined onboarding includes data training, integration setup, and configuration. Most businesses are operational within 1-2 business days.',
    },
    {
      question: 'Can the chatbot be trained on my business data?',
      answer:
        'Yes! ChatFlow AI specializes in custom training. Upload your documents, knowledge base, product catalogs, and FAQs. Our AI learns from your data to provide accurate, context-aware responses.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'Our chatbots support over 50 languages. Starter plans include one language, while Growth and Enterprise plans offer multi-language support.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'Transparent pricing with no hidden fees. Starter: $99/month (1,000 conversations), Growth: $299/month (10,000 conversations), Enterprise: Custom pricing (unlimited). All plans include standard features.',
    },
    {
      question: 'Can I integrate with existing tools?',
      answer:
        'Absolutely! Integrate with CRMs (Salesforce, HubSpot), helpdesk tools (Zendesk, Freshdesk), messaging platforms (Slack, Teams), and e-commerce platforms. APIs and webhooks available for custom integrations.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'Starter: Email support (48hr response). Growth: Priority support + dedicated account manager. Enterprise: 24/7 dedicated support with SLA guarantees.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes! Bank-level encryption, GDPR compliant, SOC 2 Type II certified. Your data is never shared with third parties. Enterprise plans can opt for on-premise deployment.',
    },
    {
      question: 'What if I exceed my conversation limit?',
      answer:
        'We\'ll notify you and offer options to upgrade or purchase additional credits. We never cut off service abruptly and work with you to find the best solution.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-highlight/20 via-white to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-accent/30 to-primary/20 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
              ❓ Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2 sm:px-0">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
              Everything you need to know about ChatFlow AI
            </p>
          </div>
        </div>

        <div ref={itemsRef} className="space-y-3" style={{ opacity: 1 }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                openIndex === index
                  ? 'border-primary shadow-xl bg-gradient-to-br from-highlight/20 to-white scale-[1.01]'
                  : 'border-gray-200 hover:border-primary/50 shadow-md hover:shadow-lg hover:scale-[1.01]'
              }`}
              style={{ opacity: 1, transform: 'translateY(0)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                type="button"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none group-hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? 'bg-primary text-white' 
                      : 'bg-accent text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="font-semibold text-base md:text-lg text-gray-900 pr-6 flex-1 text-left">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 ml-8 sm:ml-11 text-gray-600 leading-relaxed border-l-2 border-primary/20 pl-3 sm:pl-4 text-xs sm:text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


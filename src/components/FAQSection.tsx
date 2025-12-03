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
      question: 'How quickly can I get started with ChatFlow AI?',
      answer:
        'You can get started in as little as 24 hours! Our onboarding process is streamlined and includes data training, integration setup, and initial configuration. Most businesses are up and running within 1-2 business days.',
    },
    {
      question: 'Can the chatbot be trained on my specific business data?',
      answer:
        'Yes! ChatFlow AI specializes in custom training. You can upload your documents, knowledge base, product catalogs, FAQs, and any other business-specific information. Our AI will learn from your data to provide accurate, context-aware responses.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'Our chatbots support over 50 languages out of the box. For Starter plans, you can choose one language. Growth and Enterprise plans include multi-language support, allowing your chatbot to communicate with customers in their preferred language.',
    },
    {
      question: 'How does pricing work? Are there any hidden fees?',
      answer:
        'Our pricing is completely transparent with no hidden fees. Plans are based on conversation volume per month. Starter is $99/month for up to 1,000 conversations, Growth is $299/month for up to 10,000 conversations, and Enterprise offers custom pricing for unlimited conversations. All plans include standard features with no additional charges.',
    },
    {
      question: 'Can I integrate ChatFlow AI with my existing tools?',
      answer:
        'Absolutely! ChatFlow AI integrates seamlessly with popular CRMs (Salesforce, HubSpot), helpdesk tools (Zendesk, Freshdesk), messaging platforms (Slack, Microsoft Teams), and e-commerce platforms. We also provide APIs and webhooks for custom integrations.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'Starter plans include email support with 48-hour response time. Growth plans get priority support with faster response times and a dedicated account manager. Enterprise customers receive 24/7 dedicated support with a dedicated team and SLA guarantees.',
    },
    {
      question: 'Is my data secure and private?',
      answer:
        'Security is our top priority. We use bank-level encryption, are GDPR compliant, and are SOC 2 Type II certified. Your data is never shared with third parties, and you maintain full ownership of all your information. Enterprise plans can also opt for on-premise deployment.',
    },
    {
      question: 'What happens if I exceed my conversation limit?',
      answer:
        'If you exceed your monthly conversation limit, we\'ll notify you and offer options to upgrade your plan or purchase additional conversation credits. We never cut off service abruptly - we work with you to find the best solution for your needs.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-highlight/20 via-white to-accent/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-primary font-semibold text-sm mb-4">
            ❓ Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            Everything you need to know about ChatFlow AI
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Click on any question below to reveal the answer. Can't find what you're looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact our support team</a>.
          </p>
        </div>

        <div ref={itemsRef} className="space-y-3" style={{ opacity: 1 }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                openIndex === index
                  ? 'border-primary shadow-xl bg-gradient-to-br from-highlight/20 to-white'
                  : 'border-gray-200 hover:border-primary/50 shadow-md hover:shadow-lg'
              }`}
              style={{ opacity: 1, transform: 'translateY(0)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                type="button"
                className="w-full px-5 py-4 text-left flex items-center justify-between focus:outline-none group-hover:bg-gray-50/50 transition-colors"
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
                <div className="px-5 pb-5 ml-11 text-gray-600 leading-relaxed border-l-2 border-primary/20 pl-4 text-sm md:text-base">
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


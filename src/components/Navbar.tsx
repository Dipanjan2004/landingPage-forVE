import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.opacity = '1';
      navRef.current.style.visibility = 'visible';
      navRef.current.style.display = 'block';
      
      setTimeout(() => {
        if (navRef.current) {
          gsap.fromTo(
            navRef.current,
            { y: -10, opacity: 0.8 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      }, 100);
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg border-b border-gray-200"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        opacity: 1,
        visibility: 'visible',
        display: 'block',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#E2852E' }}>
              ChatFlow AI
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                style={{ color: '#374151' }}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl text-white"
              style={{ backgroundColor: '#E2852E' }}
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
              style={{ color: '#374151' }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-base sm:text-lg py-1"
                  style={{ color: '#374151' }}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all duration-200 w-full text-white text-base"
                style={{ backgroundColor: '#E2852E' }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

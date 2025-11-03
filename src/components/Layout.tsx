import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    const homeSection = document.querySelector('#home');
    if (homeSection) {
      const headerOffset = 64;
      const elementPosition = homeSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center -ml-4">
              <a 
                href="#home" 
                onClick={scrollToHome}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
               <img 
                src="images/logo.svg" 
                alt="Ikens Beauty" 
                className="h-28 w-auto"   
                style={{ maxWidth: '420px' }} 
              />
              </a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Navigation />
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

      {/* Mobile Navigation */}
<div className="md:hidden">
  <div
    className={`fixed inset-0 z-40 transition-opacity duration-300 ${
      isOpen ? 'bg-black bg-opacity-30 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}
    onClick={() => setIsOpen(false)}
  />

  <div
    className={`fixed top-0 right-0 h-full w-full bg-white/90  z-50 shadow-lg transform transition-transform duration-700 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="flex flex-col justify-center items-center h-full space-y-8 relative">
      <button
        className="absolute top-6 right-6 p-2"
        onClick={() => setIsOpen(false)}
      >
        <X className="h-8 w-8 text-gray-700" />
      </button>
      <Navigation mobile setIsOpen={setIsOpen} />
    </div>
  </div>
</div>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}
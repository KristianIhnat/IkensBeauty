import React from 'react';
import { Instagram } from 'lucide-react';

interface NavigationProps {
  mobile?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function Navigation({ mobile, setIsOpen }: NavigationProps) {
  const links = [
    { href: '#home', label: 'Domov' },
    { href: '#about', label: 'O nás' },
    { href: '#services', label: 'Služby' },
    { href: '#contact', label: 'Kontakt' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (mobile && setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`${mobile ? 'flex flex-col space-y-6' : 'flex space-x-4'} items-center`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 ${
            mobile
              ? 'text-2xl px-8 py-3 text-gray-900'
              : 'text-base px-5 py-2 text-gray-800 hover:text-amber-800'
          }`}
        >
          {link.label}
        </a>
      ))}
      <a
        href="https://www.instagram.com/ikensbeauty"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 ${
          mobile
            ? 'text-2xl px-8 py-3 text-[#E1306C]'
            : 'text-base px-5 py-2 text-[#E1306C] hover:text-[#E1306C]'
        }`}
      >
        <Instagram className={`${mobile ? 'w-8 h-8' : 'w-5 h-5'} mr-2`} />
        <span>Instagram</span>
      </a>
    </nav>
  );
}
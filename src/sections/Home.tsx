import React from 'react';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* 🔹 Pozadie a overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>

      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-black text-center px-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/IKENS copy.svg"
            alt="Ikens Beauty logo"
            className="w-80 md:w-[500px] object-contain"
          />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                const headerOffset = 64;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }
            }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-800 text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Rezervovať termín
          </a>
        </div>
      </div>
    </section>
  );
}
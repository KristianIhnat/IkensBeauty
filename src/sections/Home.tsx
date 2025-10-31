import React from 'react';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Tmavý overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>

      {/* Obsah nad videom */}
      <div className="relative z-20 min-h-screen flex items-center justify-center text-white">
        <div className="text-center px-4">
          {/* 🔹 Text hore */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Vitajte v
          </h1>

          {/* 🔹 Logo pod textom */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.svg"
              alt="Ikens Beauty logo"
              className="w-64 md:w-96" // veľkosť loga (zväčšíš/zmenšíš podľa potreby)
            />
          </div>

          {/* 🔹 Tlačidlo */}
          <div className="flex justify-center">
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

        {/* Logo v pravom dolnom rohu */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <img
            src="/images/IKENS.svg"
            alt="IKENS Beauty"
            className="w-32 md:w-48 opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}

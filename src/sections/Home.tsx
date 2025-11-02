import React from 'react';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* 🔹 Pozadie s videom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/finalSirka.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* 🔹 Logo v pravom dolnom rohu */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30">
        <img
          src="/images/MBZ.svg"
          alt="IKENS Beauty"
          className="w-48 md:w-72 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* 🔹 Obsah nad videom */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-start text-white text-center px-4 pt-[25vh]">
        {/* pt-[25vh] = posunie obsah o 25% výšky obrazovky nadol */}

        <img
          src="/images/IKENS_MIDDLE.svg"
          alt="Ikens Beauty logo"
          className="w-80 md:w-[500px] object-contain"
        />

        <div className="h-16" />

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
    </section>
  );
}
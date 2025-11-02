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
    </section>
  );
}
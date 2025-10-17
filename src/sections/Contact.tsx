import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Radi vás privítame. Pošlite nám správu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Kontaktujte nás
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Adresa</h4>
                  <p className="text-gray-600">
                    Dúbravčická 1B<br />
                    Bratislava
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Telefón</h4>
                  <p className="text-gray-600">0902 543 279</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Otváracie hodiny</h4>
                  <p className="text-gray-600">Na objednávku</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg h-[400px] transition-transform duration-300 hover:-translate-y-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.560218534982!2d17.033299176786223!3d48.19582434710379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8dad0eacb45f%3A0x6645b4e143bb8d37!2zRMO6YnJhdsSNaWNrw6EgMUIsIDg0MSAwMiBEw7picmF2a2E!5e0!3m2!1ssk!2ssk!4v1753727191746!5m2!1ssk!2ssk"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
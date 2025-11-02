import React from 'react';
import Layout from './components/Layout';
import BookingForm from './components/BookingForm';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Layout>
        <Home />
        <div 
          className="bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(/images/BackGround.jpg)' }}
        >
          <About />
          <Services />
          <Contact />
          <BookingForm />
        </div>
      </Layout>
    </div>
  );
}
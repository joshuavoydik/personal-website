import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Writing from './WritingPage';
import Newsletter from './Newsletter';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Writing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

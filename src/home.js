import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Writing from './components/Writing';
import Newsletter from './Newsletter';
import Portfolio from './Portfolio';
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

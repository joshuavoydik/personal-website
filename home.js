import React from 'react';
import Header from './header';
import Hero from './hero';
import About from './About';
import Writing from './Writing';
import Newsletter from './Newsletter';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Writing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

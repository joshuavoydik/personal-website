import React from 'react';
import Header from './Header';
import Writing from './WritingPage';
import Newsletter from './NewsletterPage';
import Contact from './ContactPage';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <Writing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

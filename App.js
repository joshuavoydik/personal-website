import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import AboutPage from './AboutPage';
import WritingPage from './WritingPage';
import NewsletterPage from './NewsletterPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/writing" component={WritingPage} />
        <Route path="/newsletter" component={NewsletterPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import WritingPage from './WritingPage';
import NewsletterPage from './NewsletterPage'; // You've imported the NewsletterPage component here
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/writing" component={WritingPage} />
        <Route path="/newsletter" component={NewsletterPage} /> // You've added the route for the NewsletterPage here
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;


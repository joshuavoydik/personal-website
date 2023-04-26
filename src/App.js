import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import WritingPage from '.src//WritingPage';
import NewsletterPage from '.src/NewsletterPage';
import ContactPage from '.src/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/writing" component={WritingPage} />
        <Route path="/newsletter" component={NewsletterPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;

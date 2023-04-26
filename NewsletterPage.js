import React from 'react';

const NewsletterPage = () => {
    return (
      <div>
        <h1>Newsletter Sign Up</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    );
  };
  
  export default NewsletterPage;

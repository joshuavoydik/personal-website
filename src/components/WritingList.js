import React from 'react';

const writings = [
  {
    title: 'Example Article 1',
    type: 'Article',
    description: 'This is an example article.',
    link: '/articles/example-article-1'
  },
  {
    title: 'Example Essay 1',
    type: 'Essay',
    description: 'This is an example essay.',
    link: '/essays/example-essay-1'
  },
  {
    title: 'Example Blog Post 1',
    type: 'Blog Post',
    description: 'This is an example blog post.',
    link: '/blog/example-blog-post-1'
  },
  // Add more writings as needed
];

function WritingList() {
  return (
    <div className="writing-list">
      <h2>Writings</h2>
      <ul>
        {writings.map((writing, index) => (
          <li key={index}>
            <h3>{writing.title}</h3>
            <p>{writing.type}</p>
            <p>{writing.description}</p>
            <a href={writing.link}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WritingList;

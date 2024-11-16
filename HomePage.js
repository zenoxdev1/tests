// HomePage.js
import React from 'react';

const beats = [
  { id: 1, title: "Beat One", price: 19.99 },
  { id: 2, title: "Beat Two", price: 24.99 },
];

function HomePage() {
  return (
    <div>
      <h1>Beatstore</h1>
      {beats.map((beat) => (
        <div key={beat.id}>
          <h2>{beat.title}</h2>
          <p>Price: ${beat.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

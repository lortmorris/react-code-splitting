import React from 'react';

const RandomNumbers = () => (
  <h1>
    {`${Math.round(Math.random() * 10000)}`}
  </h1>
);

export default RandomNumbers;

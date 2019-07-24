import React, { lazy, Suspense } from 'react';

const RandomNumbers = lazy(() => import('../RandomNumbers'));

const MultipleRandomNumbers = () => {
  const times = Math.round(Math.random() * 100) + 1;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Array.from({ length: times }).map(() => (
        <RandomNumbers key={`${Math.random()}`} />
      ))}
    </Suspense>
  );
};

export default MultipleRandomNumbers;

import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
// import RandomNumbers from './components/RandomNumbers';
// import MultiplesRandomNumbers from './components/MultiplesRandomNumbers';

const MultiplesRandomNumbers = lazy(() => import('./components/MultiplesRandomNumbers'));



function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <MultiplesRandomNumbers />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

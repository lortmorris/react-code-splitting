import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';

const MultiplesRandomNumbers = lazy(() => import('./components/MultiplesRandomNumbers'));


const App = () => (
  <Router>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/example" component={MultiplesRandomNumbers}/>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </Router>
);


export default App;

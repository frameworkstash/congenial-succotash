import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
};

export default App;

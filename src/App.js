import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ModalRoot from './containers/ModalRoot';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
      </main>
      <ModalRoot />
    </div>
  );
};

export default App;

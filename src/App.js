import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ModalRoot from './containers/ModalRoot';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <React.Fragment>
        <Route exact path="/" component={Home} />
      </React.Fragment>
      <ModalRoot />
    </React.Fragment>
  );
};

export default App;

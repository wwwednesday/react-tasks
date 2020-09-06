import React from 'react';

import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ItemList from 'components/item-list';
import PlanetDetails from 'components/planet-details';

import './App.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-4">
          <ItemList />
        </div>
        <div className="col-md-8">
          <PlanetDetails />
        </div>
      </div>
    </div>
  );
}

export default App;

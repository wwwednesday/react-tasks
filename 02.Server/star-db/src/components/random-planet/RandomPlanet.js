import React, { useState, useEffect } from 'react';

import Spinner from 'components/spinner';

import SwapiService from 'services/swapi-service';

import './RandomPlanet.sass';

const PlanetView = ({ planet }) => {
  const {
    id,
    name,
    population,
    populationPeriod,
    diameter
  } = planet;

  return (
    <React.Fragment>
      <div className="card-body flex-grow-0">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={name}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5 className="d-inline-block">Population: {population}</h5>
          </li>
          <li className="list-group-item">
            <h5 className="d-inline-block">Rotation period: {populationPeriod}</h5>
          </li>
          <li className="list-group-item">
            <h5 className="d-inline-block">Diameter: {diameter}</h5>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

const RandomPlanet = () => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const randomId = Math.floor((Math.random() * 25) + 1);

    SwapiService
      .getPlanet(randomId)
      .then((data) => setPlanet(data))
    ;
  }, []);

  return (
    <div className="jumbotron random-planet">
      <div className="card flex-row align-content-center justify-content-center">
        {planet ? <PlanetView planet={planet} /> : <Spinner />}
      </div>
    </div>
  );
}

export default RandomPlanet;

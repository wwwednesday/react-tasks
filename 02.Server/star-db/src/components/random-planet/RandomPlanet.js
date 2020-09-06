import React, { useState, useEffect } from 'react';

import SwapiService from 'services/swapi-service';

import './RandomPlanet.sass';

const RandomPlanet = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [population, setPopulation] = useState(0);
  const [populationPeriod, setpopulationPeriod] = useState(0);
  const [diameter, setDiameter] = useState(0);

  useEffect(() => {
    setId(() => {
      const randomId = Math.floor((Math.random() * 25) + 1);

      SwapiService
        .getPlanet(randomId)
        .then((data) => {
          const {
            name,
            population,
            diameter,
            rotation_period
          } = data;

          setName(name);
          setPopulation(population);
          setpopulationPeriod(rotation_period);
          setDiameter(diameter);
        })
      ;

      return randomId;
    });
  }, []);

  return (
    <div className="jumbotron random-planet">
      <div className="card flex-row align-content-center justify-content-start">
        <div className="card-body flex-grow-0">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
      </div>
    </div>
  );
}

export default RandomPlanet;

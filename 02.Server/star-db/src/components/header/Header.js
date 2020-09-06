import React from 'react';

import './Header.sass';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between align-content-center header">
      <h3>
        <a href="#" className="navbar-brand">Star DB</a>
      </h3>

      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><a href="#" className="nav-link">People</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Planets</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Starships</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

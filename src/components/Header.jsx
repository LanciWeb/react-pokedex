import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="leds-container">
        <div className="led led-blue"></div>
        <div className="led led-red"></div>
        <div className="led led-yellow"></div>
        <div className="led led-green"></div>
      </div>
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + '/img/pokemon.png'}
          alt="logo"
          className="img-fluid"
          width="200"
        />
      </div>
    </header>
  );
};

export default Header;

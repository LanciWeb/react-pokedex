import React from 'react';

const Loader = () => {
  return (
    <figure id="loader">
      <img
        src={process.env.PUBLIC_URL + '/img/pokeball.png'}
        alt="Loading..."
        height="100"
        width="100"
      />
    </figure>
  );
};

export default Loader;

import React from 'react';
import PropTypes from 'prop-types';

const PokeCard = props => {
  const { name, url } = props;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={url} alt={`Imagen de ${name}`} />
      </div>
    </div>
  );
}

PokeCard.propType = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export { PokeCard };
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PokeDetail = props => {
  const { routerprops, pokemons } = props;
  const pokeId = parseInt(routerprops.match.params.pokeId);
  const pokemon = pokemons.filter(item => item.id === pokeId);
  if (pokemon[0]) {
    const { name, url, types } = pokemon[0];
    return (
      <React.Fragment>
        <div>
          <h2>{name}</h2>
          <div>
            <img src={url} alt={name} />
          </div>
          <ul>
            {types.map((type, index) => {
              return (
                <li key={index}>{type}</li>
              );
            })}
          </ul>
        </div>
        <Link to="/">Volver a listado</Link>
      </React.Fragment>
    );
  }
  else {
    return (
      <div>
        <h2>Este pokemon no le tienes, ¡consiguelos todos!</h2>
        <Link to="/">Volver a listado</Link>
      </div>
    );
  }
}

PokeDetail.prototype = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerprops: PropTypes.object.isRequired
}

export default PokeDetail;
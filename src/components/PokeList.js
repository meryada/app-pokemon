import React from 'react';
import {PokeCard} from './PokeCard';
import PropTypes from 'prop-types';


const PokeList = props => {
  const { pokemons, query } = props;
  return (
    <ol>
      {pokemons
        .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(item => {
        return(
          <li key={item.id}>
            <PokeCard 
            name={item.name}
            url={item.url}
            />
          </li>
          )
        })}
    </ol>
    )
    };

    PokeList.propTypes = {
      pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
      query: PropTypes.string.isRequired
    }
    
    export { PokeList };
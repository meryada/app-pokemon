import React from 'react';
import {PokeCard} from './PokeCard';
import PropTypes from 'prop-types';


const PokeList = props => {
  const {pokemons} = props;
  return (
    <ol>
      {pokemons.map(item => {
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
      pokemons: PropTypes.arrayOf(PropTypes.object).isRequired 
    }
    
    export { PokeList };
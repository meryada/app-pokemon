import React from 'react';
import {PokeCard} from './PokeCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PokeList = props => {
  const { pokemons, query } = props;
  return (
    <ol>
      {pokemons
        .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(item => {
        return(
          <li key={item.id}>
            <Link to="/poke-detail">
            <PokeCard 
            name={item.name}
            url={item.url}
            />
            </Link>
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
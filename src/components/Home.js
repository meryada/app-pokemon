import React from 'react';
import { PokeList } from './PokeList';
import { Filters } from './Filters';
import PropTypes from 'prop-types';

const Home = props => {
    const {pokemons, getUserQuery, query} = props
    return(
        <React.Fragment>
            <Filters 
            getUserQuery={getUserQuery}
            query = {query}
            />
            <PokeList 
            pokemons = { pokemons }
            query = {query}
            />
        </React.Fragment>
        );
    }

    Home.prototype = {
        pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
        query: PropTypes.string.isRequired,
        getUserQuery: PropTypes.func.isRequired,
    }
    
    export default Home;
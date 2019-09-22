import React from 'react';
import './App.css';
import {fetchPokemones} from './services/fetchPokemons';
import { PokeList } from './components/PokeList';
import { Filters } from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pokemons : [],
      query: ''
    }
    this.getUserQuery = this.getUserQuery.bind(this)
  }
  
  // hacer la petición aquí cuando sean automáticas
  componentDidMount() {
    this.getPokemons ();
  }
  
  getPokemons(){
    fetchPokemones()
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }
  
  getUserQuery (event){
    const userQuery = event.currentTarget.value;
    this.setState({
      query: userQuery
    })
  }

  render() {
    console.log('Me estoy pintando', this.state.pokemons.length);
    const {pokemons, query} = this.state;
    return (
      <div className="app">
        <h1>Mi lista de Pokemons</h1>
        <Filters 
          getUserQuery={this.getUserQuery}
          query = {query}
        />
        <PokeList 
          pokemons = { pokemons }
          query = {query}
        />
      </div>
      );
    }
  }
    
    export default App;
    
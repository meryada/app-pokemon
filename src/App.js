import React from 'react';
import './App.css';
import {fetchPokemones} from './services/fetchPokemons';
import { PokeList } from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pokemons : []
    }
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
  
  render() {
    console.log('Me estoy pintando', this.state.pokemons.length);
    const {pokemons} = this.state;
    return (
      <div className="app">
      <h1>Mi lista de Pokemons</h1>
      <PokeList pokemons = { pokemons } />
        </div>
        );
      }
    }
    
    export default App;
    
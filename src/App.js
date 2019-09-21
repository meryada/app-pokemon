import React from 'react';
import './App.css';
import {fetchPokemones} from './services/fetchPokemons';

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
    return (
      <div className="app">
      <h1>Mi lista de Pokemons</h1>
      <ul>
      {this.state.pokemons.map(item => {
        return(
          <li key={item.id}>
            <div>
              <h2>{item.name}</h2>
                <div>
                  <img src={item.url} alt= {`Imagen de ${item.name}`}/>
                </div>
            </div>
          </li>
          )
        })}
        </ul>
        </div>
        );
      }
    }
    
    export default App;
    
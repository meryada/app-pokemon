import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {fetchPokemones} from './services/fetchPokemons';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';

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
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <Home 
                pokemons = { pokemons }
                getUserQuery={this.getUserQuery}
                query = {query}
              />
            );
          }}
        />
          <Route path="/poke-detail/:pokeId" render={(routerprops)=>{
            return(
              <PokeDetail
                routerprops={routerprops}
                pokemons = { pokemons }
              />
            );
          }}/>
        </Switch>
      </div>
      );
    }
  }
    
    export default App;
    
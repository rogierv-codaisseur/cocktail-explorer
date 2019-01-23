import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import CocktailImagesContainer from './components/CocktailImagesContainer';
import CocktailDetails from './components/CocktailDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Route exact path='/' component={CocktailCategoriesContainer} />
          <Route
            path='/category/:category+'
            component={CocktailImagesContainer}
          />
          <Route path='/drinks/:cocktail+' component={CocktailDetails} />
        </main>
      </div>
    );
  }
}

export default App;

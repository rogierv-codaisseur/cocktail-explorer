import React, { Component } from 'react';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <CocktailCategoriesContainer />
        </main>
      </div>
    );
  }
}

export default App;

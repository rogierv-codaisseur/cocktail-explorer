import React from 'react';
import request from 'superagent';
import CocktailCategories from './CocktailCategories';

export default class CocktailCategoriesContainer extends React.Component {
  state = {
    cocktailCategories: null
  };

  updateCocktailCategories = cocktailCategoriesObject => {
    const cocktailCategories = cocktailCategoriesObject.map(cocktailCategory =>
      Object.values(cocktailCategory).toString()
    );
    this.setState({ cocktailCategories });
  };

  componentDidMount() {
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => this.updateCocktailCategories(response.body.drinks))
      .catch(console.error);
  }

  render() {
    return (
      <CocktailCategories cocktailCategories={this.state.cocktailCategories} />
    );
  }
}

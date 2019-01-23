import React from 'react';
import request from 'superagent';
import CocktailImages from './CocktailImages';

export default class CocktailImagesContainer extends React.Component {
  state = {
    drinks: []
  };

  updateCocktailDrinks = cocktailDrinks => {
    const listDrinks = cocktailDrinks.map(drink => {
      return {
        id: drink.idDrink,
        title: drink.strDrink,
        image: drink.strDrinkThumb
      };
    });
    this.setState({ drinks: listDrinks });
  };

  componentDidMount() {
    const category = this.props.match.params.category;
    request
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .then(response => this.updateCocktailDrinks(response.body.drinks))
      .catch(console.error);
  }

  render() {
    return <CocktailImages {...this.state} />;
  }
}

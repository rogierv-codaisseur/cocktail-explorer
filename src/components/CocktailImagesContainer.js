import React from 'react';
import request from 'superagent';
import CocktailImages from './CocktailImages';

export default class CocktailImagesContainer extends React.Component {
  state = {
    images: null
  };

  updateCocktailDrinks = cocktailDrinks => {
    const list = cocktailDrinks.map(drink => {
      return drink.strDrinkThumb;
    });
    this.setState({ images: list });
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
    return <CocktailImages images={this.state.images} />;
  }
}

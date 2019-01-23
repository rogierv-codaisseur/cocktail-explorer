import React from 'react';
import { Link } from 'react-router-dom';

export default class CocktailCategories extends React.Component {
  renderCocktailCategories = cocktailCategories => {
    return (
      <ul>
        {cocktailCategories.map(cocktailCategory => (
          <li key={cocktailCategory}>
            <Link to={`category/${cocktailCategory}`}>{cocktailCategory}</Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { cocktailCategories } = this.props;
    return (
      <div>
        <h1>Cocktail Explorer</h1>
        {!cocktailCategories && 'Loading...'}
        {cocktailCategories &&
          this.renderCocktailCategories(cocktailCategories)}
      </div>
    );
  }
}

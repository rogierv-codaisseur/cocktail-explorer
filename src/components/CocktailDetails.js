import React from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import './CocktailDetails.css';

export default class CocktailDetails extends React.Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.cocktail;
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => this.setState({ ...response.body.drinks[0] }))
      .catch(console.error);
  }

  render() {
    const cocktail = this.state;
    return (
      <div>
        <h1>{cocktail.strDrink}</h1>
        <Link to='/'>Go back to the cocktail overview</Link>
        <div />
        {Object.entries(cocktail).map(
          detail =>
            detail[1] &&
            detail[0] !== 'idDrink' &&
            detail[1] !== ' ' && (
              <p className='detail'>
                {detail[0].split('str').pop() + ': ' + detail[1]}
              </p>
            )
        )}
      </div>
    );
  }
}

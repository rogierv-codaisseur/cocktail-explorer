import React from 'react';
import { Link } from 'react-router-dom';
import './CocktailImages.css';

const CocktailImages = props => {
  const { drinks } = props;
  return (
    <div>
      <h1>Cocktail images</h1>
      <p>Here we will show the images of cocktail</p>
      <Link to='/'>Go back to the cocktail overview</Link>
      <div>
        {!drinks && 'Loading...'}
        {drinks &&
          drinks.map(drink => (
            <div className='drink' key={drink.id}>
              <img src={drink.image} alt={drink.title} />
              <p>{drink.title}</p>
              <Link to={`/drinks/${drink.id}`}>TEST</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CocktailImages;

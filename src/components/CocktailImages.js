import React from 'react';
import { Link } from 'react-router-dom';

const CocktailImages = props => {
  const { images } = props;
  return (
    <div>
      <h1>Cocktail images</h1>
      <p>Here we will show the images of cocktail</p>
      <Link to='/'>Go back to the cocktail overview</Link>
      {<lu>{images && images.map(image => <img src={image} alt='Test' />)}</lu>}
    </div>
  );
};

export default CocktailImages;

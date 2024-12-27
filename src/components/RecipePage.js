import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data/recipes';

function RecipePage() {
  return (
    <div>
      <h1>Liste des Recettes</h1>
      <ul>
        {recipesData.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePage;

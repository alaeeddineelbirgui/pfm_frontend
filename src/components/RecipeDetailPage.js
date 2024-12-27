import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipes";

function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recette introuvable.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingrédients :</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Étapes :</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetailPage;

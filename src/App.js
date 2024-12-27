import React, { useState, useMemo } from "react";
import recipesData from "./data/recipes";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./styles/App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    return recipesData.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Application de Recettes</h1>
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      </header>
      <main>
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}

export default App;

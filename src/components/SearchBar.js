import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une recette..."
      value={searchQuery}
      onChange={onSearch}
      className="search-bar"
    />
  );
}

export default SearchBar;
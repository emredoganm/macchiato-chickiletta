import React from "react";
import "../styles/search.css";

export const Search: React.FC = () => {
  return (
    <div className="search-wrapper">
      <input type="search" data-testid="search-input" tabIndex={0} placeholder="Search coffees..." />
    </div>
  );
};

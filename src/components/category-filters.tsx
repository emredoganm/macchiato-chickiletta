import React from "react";
import "../styles/category-filters.css";

export const CategoryFilters: React.FC = () => {
  return (
    <ul data-testid="category-filters" className="category-filters">
      <li className="selected">All Coffees</li>
      <li>Hot</li>
      <li>Iced</li>
    </ul>
  );
};

import React from "react";
import { useAppContext } from "../context";
import "../styles/category-filters.css";

export const CategoryFilters: React.FC = () => {
  const { category, categories, setCategory } = useAppContext();
  const handleClickCategory = (name?: string) => () => setCategory(name);

  return (
    <ul data-testid="category-filters" className="category-filters">
      <li className={!category ? "selected" : ""} data-testid="all-categories" onClick={handleClickCategory()}>
        All Coffees
      </li>

      {categories.map((categoryItem) => (
        <li
          className={category === categoryItem ? "selected" : ""}
          onClick={handleClickCategory(categoryItem)}
          key={`categoryFilter@${categoryItem}`}
          data-testid={`category-filter-${categoryItem}`}
        >
          {categoryItem}
        </li>
      ))}
    </ul>
  );
};

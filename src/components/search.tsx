import React from "react";
import { SearchProps } from "../models";
import "../styles/search.css";

export const Search: React.FC<SearchProps> = ({ value, search }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="search"
        data-testid="search-input"
        onChange={handleChange}
        tabIndex={0}
        placeholder="Search coffees..."
        value={value}
      />
    </div>
  );
};

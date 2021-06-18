import React from "react";
import { CategoryFilters, Coffee, Search } from ".";
import { Coffees } from "../models";
import "../styles/app.css";

export const App: React.FC<{ coffees: Coffees }> = ({ coffees }) => {
  return (
    <div className="app-wrapper">
      <div className="sidebar">
        <h1 data-testid="app-title" className="app-title">
          Macchiato Chickiletta
        </h1>

        <Search />
        <CategoryFilters />
      </div>

      <div className="content">
        {coffees.map((coffee) => (
          <Coffee key={`coffeeItem@${coffee.id}`} {...coffee} />
        ))}
      </div>
    </div>
  );
};

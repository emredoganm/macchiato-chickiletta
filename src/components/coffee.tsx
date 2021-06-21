import React from "react";
import { Coffee as CoffeeProps } from "../models";

export const Coffee: React.FC<CoffeeProps> = ({ title, ingredients, description, id }) => {
  return (
    <div className="coffee-item">
      <h2 className="coffee-title" data-testid="coffee-title">
        {title}
      </h2>

      <p className="coffee-description" data-testid="coffee-description">
        {description}
      </p>

      <div className="ingredients">
        <strong>Ingredients:</strong> <span data-testid="ingredients-list">{ingredients.join(", ")}</span>
      </div>
    </div>
  );
};

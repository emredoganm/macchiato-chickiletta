import React from "react";
import { Coffee } from "../components";
import { useAppContext } from "../context";
import "../styles/coffees.css";

export const CoffeesContainer: React.FC = () => {
  const { coffees } = useAppContext();

  if (!coffees.length) {
    return <h2 className="no-found">No coffees found!</h2>;
  }

  return (
    <div className="coffees-container">
      {coffees.map((coffee) => (
        <Coffee key={`coffeeItem@${coffee.id}`} {...coffee} />
      ))}
    </div>
  );
};

import { Coffees } from "../models";

export const getCategories = (coffees: Coffees): string[] => {
  return [...new Set(coffees.map((coffee) => coffee.category))];
};

export const filterByCategories = (data: Coffees, names: string[]): Coffees => {
  return data.filter((coffee) => names.includes(coffee.category));
};

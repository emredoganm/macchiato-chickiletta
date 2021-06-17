import { Coffees } from "../models";

export const search = (data: Coffees, term: string): Coffees => {
  return data.filter((coffee) => coffee.title.search(new RegExp(term, "i")) >= 0);
};

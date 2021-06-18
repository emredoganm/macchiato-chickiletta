import { Coffees } from "../models";

export const search = (data: Coffees, term?: string): Coffees => {
  if (!term) {
    return data;
  }

  // To clear special chracters from regex term, we use encoding
  return data.filter(
    (coffee) => encodeURIComponent(coffee.title).search(new RegExp(encodeURIComponent(term), "i")) >= 0
  );
};

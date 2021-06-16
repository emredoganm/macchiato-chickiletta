import { commerce, datatype, lorem, random } from "faker";
import { Coffee, Coffees } from "../models";

export const generateCoffee = (override?: Partial<Coffee>): Coffee => {
  return {
    title: commerce.productName(),
    category: `${random.word()}${datatype.uuid()}`,
    description: lorem.word(),
    id: datatype.number(),
    ingredients: [...new Array(datatype.number({ max: 5 }))].map(random.word),
    ...override,
  };
};

export const generateCoffees = (count?: number): Coffees => {
  return [...new Array(count || datatype.number({ max: 10 }))].map(generateCoffee);
};

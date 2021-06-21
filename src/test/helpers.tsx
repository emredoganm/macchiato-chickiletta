import { render } from "@testing-library/react";
import { commerce, datatype, lorem, random } from "faker";
import React from "react";
import { AppContext } from "../context";
import { AppContextModel, Coffee, Coffees } from "../models";

export const generateCoffee = (override?: Partial<Coffee>): Coffee => {
  return {
    title: commerce.productName(),
    category: `${random.word()}${datatype.uuid()}`,
    description: lorem.word(),
    id: datatype.number(),
    ingredients: [...new Array(datatype.number({ min: 1, max: 5 }))].map(random.word),
    ...override,
  };
};

export const generateCoffees = (count?: number): Coffees => {
  return [...new Array(count || datatype.number({ min: 1, max: 10 }))].map(generateCoffee);
};

export const renderWithContext = (children: React.ReactNode, override?: Partial<AppContextModel>) => {
  const categories = [...new Array(datatype.number({ min: 1, max: 5 }))].map(random.word);

  const contextValue: AppContextModel = {
    coffees: generateCoffees(),
    searchTerm: random.word(),
    handleSearch: jest.fn(),
    setCategory: jest.fn(),
    category: categories[0],
    categories,
    ...override,
  };

  return render(<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>);
};

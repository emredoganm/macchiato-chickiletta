import React from "react";
import { filterByCategories, getCategories, search } from "../bff";
import coffeesData from "../data/coffees.json";
import { AppContextModel, Coffees } from "../models";

export const AppContext = React.createContext<AppContextModel>({ coffees: [], category: undefined } as any);
export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<{ data?: Coffees }> = ({ children, data }) => {
  const [coffees, setCoffees] = React.useState<Coffees>(data || coffeesData);
  const [category, setCategory] = React.useState<string>();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleCategory = (category?: string) => {
    const filtered = category ? filterByCategories(coffeesData, [category]) : coffeesData;
    setCoffees(search(filtered, searchTerm));
    setCategory(category);
  };

  const handleSearch = (term?: string) => {
    const filtered = category ? filterByCategories(coffeesData, [category]) : coffeesData;
    setCoffees(search(filtered, term));
    setSearchTerm(term || "");
  };

  const contextValue: AppContextModel = {
    coffees,
    category,
    searchTerm,
    handleSearch,
    categories: getCategories(coffeesData),
    setCategory: handleCategory,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

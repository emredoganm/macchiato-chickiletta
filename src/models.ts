export interface Coffee {
  title: string;
  description: string;
  ingredients: string[];
  category: string;
  id: number;
}

export type Coffees = Coffee[];

export interface AppContextModel {
  coffees: Coffees;
  category?: string;
  categories: string[];
  searchTerm: string;
  handleSearch: (term?: string) => void;
  setCategory: (category?: string) => void;
}

export interface SearchProps {
  value: string;
  search: (term?: string) => void;
}

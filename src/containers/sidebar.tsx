import { CategoryFilters, Search } from "../components";
import { useAppContext } from "../context";

export const Sidebar = () => {
  const { searchTerm, handleSearch } = useAppContext();

  return (
    <div className="sidebar">
      <h1 data-testid="app-title" className="app-title">
        Macchiato Chickiletta
      </h1>

      <Search value={searchTerm} search={handleSearch} />
      <CategoryFilters />
    </div>
  );
};

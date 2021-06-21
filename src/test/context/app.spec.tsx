import { fireEvent, render } from "@testing-library/react";
import { random } from "faker";
import { filterByCategories, search } from "../../bff";
import { AppContextProvider, useAppContext } from "../../context";
import coffeesData from "../../data/coffees.json";
import { generateCoffees } from "../helpers";

jest.mock("../../bff");

interface TestComponentProps {
  searchOverride?: string;
  categoryOverride?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ searchOverride, categoryOverride }) => {
  const { category, searchTerm, handleSearch, setCategory } = useAppContext();

  return (
    <div>
      <div data-testid="search" onClick={() => handleSearch(searchOverride)}>
        {searchTerm}
      </div>
      <div data-testid="category" onClick={() => setCategory(categoryOverride)}>
        {category}
      </div>
    </div>
  );
};

const renderContext = (override?: Partial<TestComponentProps>) => {
  return render(
    <AppContextProvider>
      <TestComponent {...override} />
    </AppContextProvider>
  );
};

describe("App Context Specs", () => {
  it("should search as expected when term is undefined", () => {
    const { getByTestId } = renderContext();
    expect(getByTestId("search").textContent).toStrictEqual("");

    fireEvent.click(getByTestId("search"));

    expect(search as jest.Mock).toHaveBeenCalledWith(coffeesData, undefined);
    expect(getByTestId("search").textContent).toStrictEqual("");
  });

  it("should search as expected when term is defined", () => {
    const searchOverride = random.word();
    const { getByTestId } = renderContext({ searchOverride });
    expect(getByTestId("search").textContent).toStrictEqual("");

    fireEvent.click(getByTestId("search"));

    expect(search as jest.Mock).toHaveBeenCalledWith(coffeesData, searchOverride);
    expect(getByTestId("search").textContent).toStrictEqual(searchOverride);
  });

  it("should search as expected in filtered categorized coffees", () => {
    const categoryOverride = random.word();
    const searchOverride = random.word();
    const filteredCoffees = generateCoffees();

    (filterByCategories as jest.Mock).mockImplementationOnce(() => filteredCoffees);

    const { getByTestId } = renderContext({ searchOverride, categoryOverride });

    expect(getByTestId("category").textContent).toStrictEqual("");

    fireEvent.click(getByTestId("category"));

    expect(getByTestId("category").textContent).toStrictEqual(categoryOverride);
    expect(filterByCategories as jest.Mock).toHaveBeenCalledWith(coffeesData, [categoryOverride]);
    expect(search as jest.Mock).toHaveBeenCalledWith(filteredCoffees, "");
    expect(getByTestId("search").textContent).toStrictEqual("");

    const randomFilteredCoffees = [random.word()];
    (filterByCategories as jest.Mock).mockImplementationOnce(() => randomFilteredCoffees);

    fireEvent.click(getByTestId("search"));

    expect(filterByCategories as jest.Mock).toHaveBeenCalledWith(coffeesData, [categoryOverride]);
    expect(search as jest.Mock).toHaveBeenCalledWith(randomFilteredCoffees, searchOverride);
    expect(getByTestId("search").textContent).toStrictEqual(searchOverride);
  });

  it("should handleCategory when category is undefined", () => {
    const { getByTestId } = renderContext();
    expect(getByTestId("category").textContent).toStrictEqual("");
    expect(getByTestId("search").textContent).toStrictEqual("");

    fireEvent.click(getByTestId("category"));

    expect(search as jest.Mock).toHaveBeenCalledWith(coffeesData, "");
    expect(getByTestId("category").textContent).toStrictEqual("");
    expect(getByTestId("search").textContent).toStrictEqual("");
  });
});

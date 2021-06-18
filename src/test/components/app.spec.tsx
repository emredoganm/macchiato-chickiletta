import { render } from "@testing-library/react";
import { App } from "../../components";
import { generateCoffees } from "../helpers";

describe("App tests", () => {
  it("should render as expected", () => {
    const coffees = generateCoffees();
    const { getAllByTestId, getByTestId } = render(<App coffees={coffees} />);

    expect(getAllByTestId("coffee-title")).toHaveLength(coffees.length);
    expect(getByTestId("category-filters")).toBeInTheDocument();
    expect(getByTestId("search-input")).toBeInTheDocument();
    expect(getByTestId("app-title")).toBeInTheDocument();
  });
});

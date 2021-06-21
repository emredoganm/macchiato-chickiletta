import { CoffeesContainer } from "../../containers/coffees";
import { generateCoffees, renderWithContext } from "../helpers";

describe("Coffees container specs", () => {
  it("should return no coffees found when coffees length equals zero", () => {
    const { getByText } = renderWithContext(<CoffeesContainer />, { coffees: [] });
    expect(getByText("No coffees found!")).toBeInTheDocument();
  });

  it("should render all coffees", () => {
    const coffees = generateCoffees();
    const { getAllByTestId } = renderWithContext(<CoffeesContainer />, { coffees });

    expect(getAllByTestId("coffee-title")).toHaveLength(coffees.length);
  });
});

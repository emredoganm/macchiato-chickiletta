import { render } from "@testing-library/react";
import { Coffee } from "../../components";
import { generateCoffee } from "../helpers";

describe("Coffee tests", () => {
  it("should render as expected", () => {
    const coffee = generateCoffee();
    const { getByTestId } = render(<Coffee {...coffee} />);

    expect(getByTestId("coffee-title").textContent).toStrictEqual(coffee.title);
    expect(getByTestId("coffee-description").textContent).toStrictEqual(coffee.description);
    expect(getByTestId("ingredients-list").textContent).toStrictEqual(coffee.ingredients.join(", "));
  });
});

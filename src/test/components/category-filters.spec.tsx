import { render } from "@testing-library/react";
import { CategoryFilters } from "../../components";

describe("Category filters tests", () => {
  it("should render as expected", () => {
    const { container } = render(<CategoryFilters />);

    expect(container).toBeInTheDocument();
  });
});

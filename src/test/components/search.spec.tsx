import { render } from "@testing-library/react";
import { Search } from "../../components";

describe("Search input tests", () => {
  it("should render as expected", () => {
    const { container } = render(<Search />);

    expect(container).toBeInTheDocument();
  });
});

import { fireEvent, render } from "@testing-library/react";
import { random } from "faker";
import { Search } from "../../components";

describe("Search input tests", () => {
  it("should render as expected", () => {
    const search = jest.fn();
    const value = random.word();
    const newValue = random.word();

    const { container, getByTestId } = render(<Search value={value} search={search} />);

    expect(container).toBeInTheDocument();
    expect((getByTestId("search-input") as HTMLInputElement).value).toStrictEqual(value);

    fireEvent.change(getByTestId("search-input"), { target: { value: newValue } });

    expect(search).toHaveBeenCalledWith(newValue);
  });
});

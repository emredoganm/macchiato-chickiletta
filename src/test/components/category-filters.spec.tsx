import { fireEvent } from "@testing-library/react";
import { datatype } from "faker";
import { CategoryFilters } from "../../components";
import { renderWithContext } from "../helpers";

describe("Category filters tests", () => {
  it("should select all categories when no category selected", () => {
    const { getByTestId, baseElement } = renderWithContext(<CategoryFilters />, { category: undefined });

    expect(baseElement.querySelectorAll("li.selected")).toHaveLength(1);
    expect(getByTestId("all-categories").className).toStrictEqual("selected");
  });

  it("should set category undefined when all categories clicked", () => {
    const setCategory = jest.fn();
    const { getByTestId, baseElement } = renderWithContext(<CategoryFilters />, { setCategory });

    expect(baseElement.querySelectorAll("li.selected")).toHaveLength(1);
    expect(getByTestId("all-categories").className).not.toStrictEqual("selected");

    fireEvent.click(getByTestId("all-categories"));

    expect(setCategory).toHaveBeenCalledWith(undefined);
  });

  it("should be selected when category is defined", () => {
    const categories = [...new Array(datatype.number({ min: 1, max: 10 }))].map(datatype.uuid);
    const category = categories[0];
    const { getByTestId, baseElement } = renderWithContext(<CategoryFilters />, { category, categories });

    expect(baseElement.querySelectorAll("li.selected")).toHaveLength(1);
    expect(getByTestId("all-categories").className).not.toStrictEqual("selected");
    expect(getByTestId(`category-filter-${category}`).className).toStrictEqual("selected");
  });

  it("should call setCategory function with desired category", () => {
    const setCategory = jest.fn();
    const categories = [...new Array(datatype.number({ min: 4, max: 10 }))].map(datatype.uuid);
    const category = categories[0];
    const { getByTestId, baseElement } = renderWithContext(<CategoryFilters />, { category, categories, setCategory });

    expect(baseElement.querySelectorAll("li.selected")).toHaveLength(1);
    expect(getByTestId("all-categories").className).not.toStrictEqual("selected");
    expect(getByTestId(`category-filter-${category}`).className).toStrictEqual("selected");

    fireEvent.click(getByTestId(`category-filter-${categories[2]}`));

    expect(setCategory).toHaveBeenCalledWith(categories[2]);
  });
});

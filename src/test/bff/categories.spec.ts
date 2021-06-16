import { random } from "faker";
import { filterByCategories, getCategories } from "../../bff";
import { Coffees } from "../../models";
import { generateCoffees } from "../helpers";

describe("Categories BFF tests", () => {
  describe("getCategories", () => {
    it("should return categories of coffees", () => {
      const coffees = generateCoffees(5);

      expect(getCategories(coffees)).toStrictEqual(coffees.map((coffee) => coffee.category));
    });

    it("should return unique categories", () => {
      const category = random.word();
      // Make category of all categories same
      const coffees = generateCoffees().reduce<Coffees>((prev, curr) => [...prev, { ...curr, category }], []);

      expect(getCategories(coffees)).toStrictEqual([category]);
    });
  });

  describe("filterByCategories", () => {
    it("should return filtered coffees by category name", () => {
      const categoryName = random.word();
      const coffees = generateCoffees(5);

      coffees[0].category = categoryName;
      coffees[3].category = categoryName;
      coffees[4].category = categoryName;

      const filteredCoffees = filterByCategories(coffees, [categoryName]);

      expect(filteredCoffees.length).toStrictEqual(3);
      expect(filteredCoffees[0].category).toStrictEqual(categoryName);
    });
  });
});

import { datatype, random } from "faker";
import { search } from "../../bff/search";
import { generateCoffees } from "../helpers";

describe("Search specs", () => {
  it("should return expected coffees in case-insensitive mode", () => {
    const coffees = generateCoffees(10);
    const searchTerm = `${random.word()}#${datatype.uuid()}`;

    coffees[0].title = `${random.word()}${searchTerm.toLowerCase()}${random.word()}`;
    coffees[2].title = `${random.word()} ${searchTerm.toUpperCase()}`;
    coffees[4].title = `${searchTerm}${random.word()}`;

    const result = search(coffees, searchTerm.toLowerCase());

    expect(result).toHaveLength(3);
    expect(result).toStrictEqual([coffees[0], coffees[2], coffees[4]]);
  });
});

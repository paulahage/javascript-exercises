describe("exercising objects", () => {
  it("should read the length of persons in the cart", () => {
    const cart = require("./cart");

    const result = 0;

    expect(result).toEqual(3);
  });

  it("should read the length of total products in the cart", () => {
    const cart = require("./cart");

    const result = 0;

    expect(result).toEqual(5);
  });

  it("should read the length of unique products in the cart", () => {
    const cart = require("./cart");

    const result = 0;

    expect(result).toEqual(4);
  });

  it("should read all cart peoples name", () => {
    const cart = require("./cart");

    const result = [];

    expect(result.sort()).toEqual(
      ["Person People", "Pierce Pieople", "Preece Preeople"].sort()
    );
  });

  it("should display the total price of purchased items per person WITHOUT taxes", () => {
    const cart = require("./cart");

    const result = [];

    expect(result.sort((a, b) => a.name - b.name)).toEqual(
      [
        { name: "Person People", total: 2600.34 },
        { name: "Pierce Pieople", total: 403.11 },
        { name: "Preece Preeople", total: 500.25 },
      ].sort((a, b) => a.name - b.name)
    );
  });

  it("should display the total price of purchased items per person WITH applied taxes", () => {
    const cart = require("./cart");

    const result = [];

    expect(result.sort((a, b) => a.name - b.name)).toEqual(
      [
        { name: "Person People", total: 2841.43 },
        { name: "Pierce Pieople", total: 432.38 },
        { name: "Preece Preeople", total: 510.25 },
      ].sort((a, b) => a.name - b.name)
    );
  });

  it("should format a list of products per person", () => {
    const cart = require("./cart");

    const result = [];

    expect(result.sort((a, b) => a.id - b.id)).toEqual(
      [
        { id: 1, productIds: [1, 2] },
        { id: 2, productIds: [3, 2] },
        { id: 3, productIds: [4] },
      ].sort((a, b) => a.id - b.id)
    );
  });

  it("should create a list of products per tax type", () => {
    const cart = require("./cart");

    const result = [];

    expect(result.sort((a, b) => a.id - b.id)).toEqual(
      [
        { tax: "Tax A", productIds: [1, 3] },
        { tax: "Tax B", productIds: [1, 2, 4] },
      ].sort((a, b) => a.id - b.id)
    );
  });

  it("should create an object summarizing all the carts", () => {
    const cart = require("./cart");

    const result = {};

    expect(result).toEqual({
      persons: ["Person People", "Pierce Pieople", "Preece Preeople"],
      products: ["Product A", "Product B", "Product C", "Product D"],
    });
  });

  it("should create an object of taxes showing products applying them", () => {
    const cart = require("./cart");

    const result = {};

    expect(result).toEqual({
      "Tax A": {
        productIds: [1, 3],
      },
      "Tax B": {
        productIds: [1, 2, 4],
      },
    });
  });
});

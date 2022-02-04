/**
 * @jest-environment jsdom
 */
const { giphySearch } = require("../client/giphyapi.js");

describe("giphySearch function", () => {
  let giphyKey = "UTn30CTrQ5AweWYK7c50BaP6Fd28hUr3";
  let keyword = "dog";

  it("returns a string", () => {
    let giflink = giphySearch(keyword);
    expect(typeof giflink.toBe(string));
  });
});

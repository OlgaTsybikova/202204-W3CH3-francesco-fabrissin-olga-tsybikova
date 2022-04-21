import SerieComponent from "./SerieComponent.js";

describe("Given a SeriesComponent", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });
  describe("When istantiated with the name 'The Sopranos'", () => {
    test("Then it should render a li with h4 with 'The Sopranos' inside", () => {
      container = document.createElement("div");
      const name = "The Sopranos";

      new SerieComponent(container, { name });
      const serieTitleElement = container.querySelector("li h4");

      expect(serieTitleElement.textContent).toBe(name);
    });
  });

  describe("When istantied with the poster 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'", () => {
    test("Then it should render a li showing the image 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'", () => {
      const posterUrl =
        "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
      const expectedImgSrc =
        "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";

      new SerieComponent(container, { posterUrl });
      const poster = container.querySelector("li img");

      expect(poster.src).toBe(expectedImgSrc);
    });
  });
});

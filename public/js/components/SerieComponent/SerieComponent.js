import Component from "../Component/Component.js";
import StarComponent from "../StarComponent/StarComponent.js";

class SerieComponent extends Component {
  constructor(parentElement, serieName) {
    super(parentElement, "li", "serie");

    this.serieName = serieName;

    this.render();
  }

  render() {
    this.element.innerHTML = `
     <img
                  class="serie__poster"
                  src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">The Sopranos</h4>
                <p class="serie__info">David Chase (1999)</p>
                <ul class="score">
                </ul>
    `;

    const starsContainer = document.querySelector(".score");

    for (let i = 0; i < 5; i++) {
      new StarComponent(starsContainer, i, () => "hola");
    }
  }
}

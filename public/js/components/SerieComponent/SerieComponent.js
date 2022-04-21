import Component from "../Component/Component.js";

class SerieComponent extends Component {
  constructor(parentElement, serie) {
    super(parentElement, "li", "serie");

    this.serie = serie;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <img
                  class="serie__poster"
                  src= ${this.serie.poster}
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} ${this.serie.year}</p>
                <ul class="score">
                </ul>
    `;
  }
}

export default SerieComponent;

import Component from "../Component/Component.js";
import StarComponent from "../StarComponent/StarComponent.js";

class SerieComponent extends Component {
  poster;
  name;
  creator;
  year;
  score;
  id;

  constructor(parentElement, { poster, name, creator, year, score, id }) {
    super(parentElement, "li", "serie");
    this.poster = poster;
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.score = score;
    this.id = id;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <img
                  class="serie__poster"
                  src= ${this.poster}
                  alt="${this.name} poster"
                />
                <h4 class="serie__title">${this.name}</h4>
                <p class="serie__info">${this.creator} ${this.year}</p>
                <ul class="score" id=id${this.id}>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
                
    `;

    const starsContainer = document.querySelector(`#id${this.id}`);

    for (let i = 0; i < this.score; i++) {
      new StarComponent(starsContainer, i, "icon--score fa", () => "hola");
    }
    for (let y = 0; y < 5 - this.score; y++) {
      new StarComponent(starsContainer, y, "icon-score far", () => "hola");
    }
  }
}

export default SerieComponent;

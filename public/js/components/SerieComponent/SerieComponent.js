import Component from "../Component/Component.js";

class SerieComponent extends Component {
  poster;
  name;
  creator;
  year;

  constructor(parentElement, { poster, name, creator, year }) {
    super(parentElement, "li", "serie");
    this.poster = poster;
    this.name = name;
    this.creator = creator;
    this.year = year;

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
                <ul class="score">
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
                
    `;
  }
}

export default SerieComponent;

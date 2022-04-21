import Component from "../Component/Component.js";

class StarComponent extends Component {
  starNumber;
  action;
  className;

  constructor(parentelement, starNumber, className, action) {
    super(parentelement, "li", "score__star");
    this.starNumber = starNumber;
    this.action = action;
    this.className = className;
    this.eventsListener();
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <i class="${this.className} fa-star" title="${this.starNumber}/5"></i>
    `;
  }

  eventsListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default StarComponent;

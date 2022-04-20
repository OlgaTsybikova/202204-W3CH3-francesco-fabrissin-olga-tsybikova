import Component from "../Component/Component.js";

class StarsComponent extends Component {
  starNumber;
  action;

  constructor(parentelement, starNumber, action) {
    super(parentelement, "li", "score__star");
    this.starNumber = starNumber;
    this.action = action;
    this.eventsListener();
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <i class="icon-score far fa-star" title="${this.starNumber}/5"></i>
    `;
  }

  eventsListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default StarsComponent;

import Component from "../Component/Component.js";

class StarComponent extends Component {
  action;

  constructor(parentelement, action) {
    super(parentelement, "ul", "score");

    this.action = action;
    this.eventsListener();
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
    `;
  }

  eventsListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default StarComponent;

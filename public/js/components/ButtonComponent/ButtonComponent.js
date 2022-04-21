import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  action;

  constructor(parentElement, action) {
    super(parentElement, "button", "fas fa-times-circle icon--delete");
    this.action = action;
    this.render();
    this.addListeners();
  }

  render() {
    this.element.innerHTML = `
    <i class="fas fa-times-circle icon--delete">${this.action}</i>`;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;

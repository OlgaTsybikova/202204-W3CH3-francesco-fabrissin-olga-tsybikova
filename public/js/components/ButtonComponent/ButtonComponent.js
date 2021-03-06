import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  action;

  constructor(parentElement, action) {
    super(parentElement, "button", "fas fa-times-circle icon--delete");
    this.action = action;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <i class=${"fas fa-times-circle icon--delete"}></i>`;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;

import Component from "../Component/Component.js";

class InfoComponent extends Component {
  text;

  constructor(parentElement) {
    super(parentElement, "p", "info");
    this.render();
  }

  render() {
    this.element.textContent = "You have 4 series pending to watch";
  }
}
export default InfoComponent;

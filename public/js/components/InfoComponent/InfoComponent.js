import Component from "../Component/Component.js";

class InfoComponent extends Component {
  text;
  seriesNumber;

  constructor(parentElement, seriesNumber) {
    super(parentElement, "p", "info");
    this.seriesNumber = seriesNumber;
    this.render();
  }

  render() {
    this.element.innerHTML = this.seriesNumber;
  }
}
export default InfoComponent;

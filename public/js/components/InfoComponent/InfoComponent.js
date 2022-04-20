import Component from "../Component/Component.js";

class InfoComponent extends Component {
  text;

  constructor(parentElement, text) {
    super(parentElement, "p", "info");
    this.element.textContent = text;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <p class="info">You have 4 series pending to watch</p>
    <!--<p class="info">Congrats! You've watched all your series</p>-->
    `;
  }
}
export default InfoComponent;

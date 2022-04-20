import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "container");

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
          </section>
        </section>
      </main>
    `;
  }
}

export default AppComponent;

import series from "../../series.js";
import Component from "../Component/Component.js";
import SerieComponent from "../SerieComponent/SerieComponent.js";

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
          <ul class="series-list">
          </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <ul class="series-list">
          </ul>
          </section>
        </section>
      </main>
    `;

    const pendingSeriesContainer = document.querySelector(
      ".series-pending .series-list"
    );
    const watchedSeriesContainer = document.querySelector(
      ".series-watched .series-list"
    );

    series.forEach((serie) =>
      serie.watched === true
        ? new SerieComponent(watchedSeriesContainer, serie)
        : new SerieComponent(pendingSeriesContainer, serie)
    );
  }
}

export default AppComponent;

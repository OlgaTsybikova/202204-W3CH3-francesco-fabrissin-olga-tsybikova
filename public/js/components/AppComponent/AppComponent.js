import Component from "../Component/Component.js";
import SerieComponent from "../SerieComponent/SerieComponent.js";
import InfoComponent from "../InfoComponent/InfoComponent.js";

class AppComponent extends Component {
  series;
  constructor(parentElement, series) {
    super(parentElement, "div", "container");
    this.series = series;
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
          <section class="info-container info-container--pending"></section>
          <ul class="series-list">
          </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <section class="info-container info-container--watched"></section>
            <ul class="series-list">
          </ul>
          </section>
        </section>
      </main>
    `;
    const infoPendingContainer = document.querySelector(
      ".info-container--pending"
    );
    const infoWatchedContainer = document.querySelector(
      ".info-container--watched"
    );

    const watchedSeriesCounter = this.series.filter((serie) => serie.watched);
    const pendingSeriesCounter = this.series.filter((serie) => !serie.watched);

    new InfoComponent(
      infoPendingContainer,
      `You have ${pendingSeriesCounter.length} series pending to watch:`
    );
    new InfoComponent(
      infoWatchedContainer,
      `You have already watched ${watchedSeriesCounter.length} series! Keep up!`
    );

    const pendingSeriesContainer = document.querySelector(
      ".series-pending .series-list"
    );
    const watchedSeriesContainer = document.querySelector(
      ".series-watched .series-list"
    );

    this.series.forEach((serie) =>
      serie.watched
        ? new SerieComponent(watchedSeriesContainer, serie)
        : new SerieComponent(pendingSeriesContainer, serie)
    );
  }
}
export default AppComponent;

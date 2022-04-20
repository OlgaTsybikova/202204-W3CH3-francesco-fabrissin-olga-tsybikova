import series from "../series.js";

class CounterInfo extends series {
  count;
  watchedSerie;
  pendingSerie;
  constructor(watchedSerie, pendingSerie, count) {
    super();
    this.watchedSerie = watchedSerie;
    this.pendingSerie = pendingSerie;
    this.count = count;
  }
}
export default CounterInfo;

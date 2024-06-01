import mapboxgl, { Map } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhbGlsYWxpZXYiLCJhIjoiY2x3ODBhdWR5MXp1MDJscGR0eGgxMXh2aSJ9.ppOwu4hFatGJKjiMFvoDZA";

class MapInit {
  private _map: Map;

  constructor(idContainer: string) {
    this._map = this.setupMap(idContainer);
  }
  get map(): Map {
    return this._map;
  }
  set map(value: Map) {
    this._map = value;
  }

  setupMap(container: string): Map {
    return new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }
}

export default MapInit;

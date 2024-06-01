import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhbGlsYWxpZXYiLCJhIjoiY2x3ODBhdWR5MXp1MDJscGR0eGgxMXh2aSJ9.ppOwu4hFatGJKjiMFvoDZA";

class MapInit {
  private _map: mapboxgl.Map;

  constructor(idContainer: string) {
    this._map = this.setupMap(idContainer);
    this.flyToCoordinates([8.725689367209213, 47.50045980431281], 13);
  }

  get map(): mapboxgl.Map {
    return this._map;
  }

  setupMap(container: string): mapboxgl.Map {
    return new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [0, 0], // Установите временный центр карты
      zoom: 1, // Установите временный зум
    });
  }

  flyToCoordinates(coordinates: [number, number], zoom: number): void {
    this._map.flyTo({
      center: coordinates,
      zoom: zoom,
      essential: true, // Это гарантирует, что анимация будет выполнена, даже если вкладка не активна
    });
  }
}

export default MapInit;

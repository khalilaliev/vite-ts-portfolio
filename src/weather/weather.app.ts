import MapInit from "../services/map/init";

const KEY = "";
const getWeather = (lat: number, lng: number): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}`;
};

const { map } = new MapInit("map");
// console.log(map);

// map.on("load", () => {
//   console.log(map.getStyle().layers);
// });
map.on("click", (e: any) => {
  const { lat, lng } = e.lngLat;
  // console.log(getWeather(lat, lng));
  fetch(getWeather(lat, lng))
    .then((res) => res.json())
    .then((data) => console.log(data));
});

import "./style.css";
import mapInit from "./services/map/init.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div id = "map" style = "overflow: hidden; width: 100%; height: 100vh;"></div>
`;

const { map } = new mapInit("map");
console.log(map);

map.on("load", () => {
  console.log(map.getStyle().layers);
});
map.on("click", (e) => {
  console.log(e);
});

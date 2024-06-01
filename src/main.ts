import "./style.css";
import MapInit from "./services/map/init.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div id = "map" style = "overflow: hidden; width: 100%; height: 100vh;"></div>
`;

const map = new MapInit("map");
console.log(map);

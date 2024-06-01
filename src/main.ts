import "./style.css";
import mapInit from "./services/map/init.ts";
import { boostRouting, renderNavLinks } from "./utilities/routing.ts";

const app = document.querySelector<HTMLDivElement>("#app");
const nav = document.querySelector<HTMLDivElement>("#nav");

const mapContent = /* html */ `
  <div id = "map" style = "overflow: hidden; width: 100%; height: 100vh;"></div>
`;

// const { map } = new mapInit("map");

if (nav) {
  boostRouting(nav);
}

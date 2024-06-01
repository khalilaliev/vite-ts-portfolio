import { ROUTES } from "../config/routing.config";

export const boostRouting = (nav: HTMLDivElement): void => {
  renderNavLinks(nav);
  registerNavLinks(nav);
};

export const renderNavLinks = (nav: HTMLDivElement): void => {
  const navFragment = document.createDocumentFragment();
  Object.entries(ROUTES).forEach(([route, { linkLabel }]) => {
    const linkEl = document.createElement("a");
    linkEl.href = route;
    linkEl.textContent = linkLabel;
    linkEl.className =
      "text-black hover:border-b-2 hover:border-gray-500 mx-2 py-1 transition-all";
    navFragment.appendChild(linkEl);
  });
  nav.appendChild(navFragment);
};

export const registerNavLinks = (nav: HTMLElement): void => {
  nav.addEventListener("click", (e): void => {
    e.preventDefault();
  });
};

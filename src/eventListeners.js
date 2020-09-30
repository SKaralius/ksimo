import { selectContent } from "./featureModalContent";

let timeout;

function showModal({ modal, html, id }) {
  timeout = setTimeout(() => {
    modal.style.cssText = `
        display: flex
        `;
    modal.innerHTML += selectContent(id);
    html.style.cssText += `
          overflow-y: hidden !important;
          `;
  }, 250);
}

function hideModal({ modal, html }) {
  if (timeout) clearTimeout(timeout);
  modal.innerHTML = "";
  modal.style.cssText = `
            display: none
          `;
  html.style.removeProperty("overflow-y");
  html.style.cssText += `
          overflow-y: scroll;
          `;
}

export function listenForEvents(setUpContext, app) {
  window.addEventListener("load", function () {
    const html = document.getElementsByTagName("html")[0];
    const modal = document.getElementsByClassName("feature-modal")[0];
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: visible;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    // Add show modal and hidde modal function to buttons
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.onmouseover = () => showModal({ modal, html, id: button.id });
      button.ontouchstart = () => showModal({ modal, html, id: button.id });
      button.onmouseleave = () => hideModal({ modal, html });
      button.ontouchend = () => hideModal({ modal, html });
    }
    setUpContext();
    app();
  });

  window.addEventListener("resize", () => {
    setUpContext();
  });
}

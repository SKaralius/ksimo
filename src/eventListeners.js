import { selectContent } from "./featureModalContent";

function showModal({ modal, id, isIOS }) {
  // Visible and Fade in
  modal.style.cssText = `
              display: flex;

              opacity: 1;
              animation-name: fadeInOpacity;
              animation-iteration-count: 1;
              animation-timing-function: ease-in;
              animation-duration: 0.3s;
              ${isIOS ? "pointer-events: all;" : "pointer-events: none;"}
        `;
  modal.innerHTML = selectContent(id);
}

function hideModal({ modal }) {
  modal.innerHTML = "";
  modal.style.cssText = `
              display: none;
          `;
}

export function listenForEvents(setUpContext, app) {
  let isIOS =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  window.addEventListener("load", function () {
    const html = document.getElementsByTagName("html")[0];
    const modal = document.getElementsByClassName("feature-modal")[0];
    // Makes some things visible.
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: visible;
                height: unset;
                overflow: auto`;
    // Hides spinner
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    // Add show modal and hidde modal function to buttons
    const buttons = document.getElementsByTagName("button");
    if (isIOS) {
      for (let button of buttons) {
        button.onclick = () => showModal({ modal, html, id: button.id, isIOS });
        // button.onclick = () => showModal({ modal, html, id: button.id });
        modal.onclick = () => hideModal({ modal, html });
        // modal.onclick = () => hideModal({ modal, html });
      }
    } else {
      for (let button of buttons) {
        button.onmouseover = () =>
          showModal({ modal, html, id: button.id, isIOS });
        // button.onclick = () => showModal({ modal, html, id: button.id });
        button.onmouseleave = () => hideModal({ modal, html });
        // modal.onclick = () => hideModal({ modal, html });
      }
    }
    setUpContext();
    app();
  });

  window.addEventListener("resize", () => {
    setUpContext();
  });
}

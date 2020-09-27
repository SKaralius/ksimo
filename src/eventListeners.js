import { selectContent } from "./featureModalContent";

export function listenForEvents(setUpContext, app) {
  window.addEventListener("load", function () {
    const modal = document.getElementsByClassName("feature-modal")[0];
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: visible;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    // Add show modal function to buttons
    const buttons = document.getElementsByTagName("button");
    let closeButtonRef;
    for (let button of buttons) {
      if (button.className !== "modal-close-button") {
        button.onclick = () => {
          modal.style.cssText = `
        display: block
        `;
          modal.innerHTML += selectContent(button.id);
          closeButtonRef.style.cssText = `
          display: block;
          `;
        };
        // Close button in the modal
        // gets close modal function
      } else {
        closeButtonRef = button;
        button.onclick = () => {
          modal.innerHTML = "";
          modal.style.cssText = `
        display: none
        `;
          closeButtonRef.style.cssText = `
          display: none
          `;
        };
      }
    }
    setUpContext();
    app();
  });

  window.addEventListener("resize", () => {
    setUpContext();
  });
}

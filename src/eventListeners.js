export function listenForEvents(setUpContext, app) {
  window.addEventListener("load", function () {
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: visible;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    setUpContext();
    app();
  });

  window.addEventListener("resize", () => {
    setUpContext();
  });
}

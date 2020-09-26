export function listenForEvents(setUpContext, app) {
  window.addEventListener("load", function () {
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: visible;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    setUpContext();
    // setVideoHeight(video);
    app();
    // ScrollTrigger didnt help Chrome mobile to load the animations correctly.

    // Suqare is laoded too high and contact animation isnt laoded at all
  });

  window.addEventListener("resize", () => {
    setUpContext();
    // setVideoHeight(video);
  });
}

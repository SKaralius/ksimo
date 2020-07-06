import { ScrollTrigger } from "gsap/ScrollTrigger";

function setVideoHeight(video) {
  if (window.screen.width > 352) {
    if (
      window.screen.height < window.screen.width &&
      window.screen.height < 812
    ) {
      video.height = window.screen.height;
    } else {
      video.width = 352;
      video.style.height = "100%";
    }
  }
  if (window.screen.height < 812) {
    video.style.height = "";
    if (window.screen.height > window.screen.width) {
      video.height = window.screen.height - 80;
    } else {
      video.height = window.screen.height;
    }
  }
}

export function listenForEvents(setUpContext, app, video) {
  window.addEventListener("load", function () {
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: unset;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    setUpContext();
    setVideoHeight(video);
    app();
    ScrollTrigger.refresh();
  });

  window.addEventListener("resize", () => {
    setUpContext();
    setVideoHeight(video);
  });
}

export function listenForEvents(setUpContext, app) {
  window.addEventListener("load", function () {
    document.getElementsByTagName("html")[0].style.cssText = `
                visibility: unset;
                height: unset;
                overflow: auto`;
    document.getElementsByClassName("spinner-container")[0].style.cssText = `
          display:none`;
    app();
    setUpContext();
  });

  window.addEventListener("resize", () => {
    setUpContext();
    const video = document.getElementsByTagName("video")[0];
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
  });
}

// Debounce if need to improve performance for egz on resize
// const debounce = (func, wait, immediate) => {
//   let timeout;
//   return () => {
//     const context = this,
//       args = arguments;
//     const later = () => {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

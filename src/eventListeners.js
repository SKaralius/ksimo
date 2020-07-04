export function listenForEvents(setUpContext) {
  window.addEventListener("load", function () {
    console.log("All assets are loaded");
  });

  window.addEventListener("resize", () => {
    setUpContext();
    const video = document.getElementsByTagName("video")[0];
    // if (window.screen.width < 352) {
    //   video.width = window.screen.width;
    // }
    if (window.screen.height < 812) {
      video.height = window.screen.height - 80;
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

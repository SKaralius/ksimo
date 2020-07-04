export function listenForEvents(setUpContext) {
  window.addEventListener("load", function () {
    console.log("All assets are loaded");
  });

  window.addEventListener("resize", () => setUpContext());
}

const debounce = (func, wait, immediate) => {
  var timeout;
  return () => {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

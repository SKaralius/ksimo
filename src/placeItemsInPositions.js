import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function placeItemsInPositions(arrayOfPositions, items) {
  arrayOfPositions.forEach((position, index) => {
    gsap.to(items[index], {
      motionPath: [{ x: 50, y: 50 }, position],
      scrollTrigger: {
        trigger: ".landing",
        start: "0%",
        end: "0%",
        scrub: true,
        markers: true,
      },
    });
  });
}

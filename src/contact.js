import { gsap } from "gsap";

export function contact() {
  const contact = document.getElementsByClassName("contact-container")[0];
  const closeButton = document.getElementsByClassName("x-button")[0];
  const tl = gsap.timeline({ paused: true });

  tl.to(contact, {
    position: "fixed",
    width: "100%",
    height: "5rem",
    bottom: "0",
    duration: 0.25,
    borderRadius: 0,
    ease: "back.out(1.7)",
  });
  tl.to(closeButton, { display: "unset", duration: 0 }, "<");
  tl.from(
    closeButton,
    {
      width: 0,
      height: 0,
      color: "transparent",
      fontSize: 0,
      duration: 0.25,
      ease: "back.out(1.7)",
    },
    "<"
  );

  let contactHTML = contact.innerHTML;
  closeButton.addEventListener("click", () => {
    if (contact.classList.contains("active")) {
      contact.classList.remove("active");
      contact.innerHTML = contactHTML;
      tl.reverse();
    }
  });
  contact.addEventListener("click", () => {
    if (!contact.classList.contains("active")) {
      setTimeout(() => {
        contact.innerHTML = `
    <ul>
        <li><a href="https://github.com/skaralius">Checkout my Github</a></li>
        <li><a href="mailto:k.simonas@hotmail.com">Write me an Email</a></li>
    </ul>
        `;
      }, 250);
      contact.classList.add("active");
      tl.play();
    }
  });
}

export function selectContent(id) {
  console.log("adds content for", id);
  switch (true) {
    case id === "live":
      return `
        <p>Every message sent is saved in the database, but also transmitted from the server to all of the WebSocket subscribers.
        </p>
                <video width="auto" height="812" autoplay
                    preload="metadata" playsinline>
                    <source src="../src/assets/videos/live.webm" type="video/webm">
                    <source src="../src/assets/videos/live.mp4" type="video/mp4">
                </video>
            `;
    default:
      break;
  }
  return `<img src="../src/assets/images/scales.jpg" alt="">`;
}

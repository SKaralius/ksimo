export function selectContent(id) {
  const videoHeight = (window.innerHeight / 100) * 90;
  console.log("adds content for", id);
  switch (true) {
    case id === "live":
      return `<div class="feature-video-container">
                      <video width="auto" height=${videoHeight} autoplay
                    preload="metadata" playsinline>
                    <source src="../src/assets/videos/live.webm" type="video/webm">
                    <source src="../src/assets/videos/live.mp4" type="video/mp4">
                </video>
              </div>
              <p>Every message sent is saved in the database, but also transmitted from the server to all of the WebSocket subscribers.</p>`;
    default:
      break;
  }
  return `<img src="../src/assets/images/scales.jpg" alt="">`;
}

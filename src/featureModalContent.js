export function selectContent(id) {
  const videoHeight = (window.innerHeight / 100) * 90;
  let response = "";
  function renderVideo(videoName) {
    return `<div class="feature-video-container">
                  <video width="auto" height=${videoHeight} autoplay loop"
                    preload="metadata" playsinline>
                    <source src="../src/assets/videos/${videoName}.webm" type="video/webm">
                    <source src="../src/assets/videos/${videoName}.mp4" type="video/mp4">
                </video>
            </div>`;
  }
  const splitId = id.split("-");
  if (splitId[1]) {
    response += renderVideo(splitId[0]);
  }
  switch (true) {
    // Popitalk
    // case splitId[0] === "live":
    //   response += `<p>Every message sent is saved in the database, but also transmitted from the server to all of the WebSocket subscribers.</p>`;
    //   break;
    // case splitId[0] === "gif":
    //   response += `<p>Our server uses Giphy API to server trending gifs to users. Users can also search for gifs.</p>`;
    //   break;
    // case splitId[0] === "drafts":
    //   response += `<p>If a user types a message, leaves the channel and then comes back to it, the message is saved and the user can continue from where they were.</p>`;
    //   break;
    // case splitId[0] === "scroll":
    //   response += `<p>If a user scrolls a channel to read some of the previous messages and then navigates somewhere else, their scroll position is saved and they can continue from where they were when they come back.</p>`;
    //   break;
    // case splitId[0] === "emojis":
    //   response += `<p>Emojis are implemented using emoji-mart library. Emojis use native icons for user system, that means that users don't have to download a package of emoji icons.</p>`;
    //   break;
    case splitId[0] === "states":
      response += `<p>Chat messages have three states. Pending, Accepted and Rejected.
      When a message is first sent, a message with a pending state is added to the chat without waiting for a server response.
      If the message reaches the server and the server confirms the message an accepted state is added to the message on the client.
      If the message does not reach the server, or the server rejects the message, a rejected state is added to the message.
      Rejected messages get an option to be resent.
      </p>`;
      break;
    case splitId[0] === "bug":
      response += `<p>Some of the biggest performance improvements were made by using uncontrolled components where possible and recording state when a component unmounts.
    Others include using debounce, throttle, memoizing functions.  
      </p>`;
      break;
    // StartGG
    case splitId[0] === "api":
      response += `<p>Youtube and Reddit both provide an API, so developers could query their servers for data.
      StartGG asks for a large number of top posts, processes them and stores them in cache. The posts are routinely updated.
      This allows StartGG to server most popular posts for Youtube and Reddit in just a moment, when it takes Youtube and Reddit
      to build those posts and other data far longer.
      </p>`;
      break;
    case splitId[0] === "reformats":
      response += `<p>A request to Reddit API for 25 of the most popular posts returns about 100 kiB of data.
      StartGG server processes the data to remove all the unnecessary information, the response from StartGG server for the most popular 25 Reddit posts is about 10 kiB, 10 times less!
      </p>`;
      break;
    case splitId[0] === "caches":
      response += `<p>When data is received from Reddit and Youtube API's it is cached on the StartGG server.
      The server uses node-cache library to save information returned from Reddit and Youtube in server memory.
      Because the content is saved in memory, it does not have to be built when a request to serve it is received.
      Instead, content is requested from Youtube and Reddit API regularly to ensure a balance between speed and latest content.
      This allows for near instantaneous server responses. 
      </p>`;
      break;
    case splitId[0] === "scheduled":
      response += `<p>StartGG server uses node-cron library to schedule fetching content from Reddit and Youtube automatically.
      </p>`;
      break;
    case splitId[0] === "reusable":
      response += `<p>Both Reddit and Youtube components are wrapped in a preview component, which adds pagination, a button to expand the views, sets their height and gives them a shadow.
      </p>`;
      break;
    // case splitId[0] === "sticky":
    //   response += `<p>State changes, such as expanding a social media view, persist between page navigation. This allows a user to keep their place when they navigate away from the page and come back to StartGG after viewing content.
    //   This is achieved by saving React's state in localstorage when a component unmounts and checking local storage for state when it mounts.
    //   </p>`;
    //   break;
    case splitId[0] === "extendable":
      response += `<p>StartGG uses TypeScript on the front-end, together with reusable components that allows the project to be easily extendable in order to add more social media sites or more features for the existing ones.
      </p>`;
      break;
    case splitId[0] === "progressive":
      response += `<div class="feature-video-container">
      <img height=${videoHeight} src="../src/assets/images/pwa.jpg" alt="icon on a mobile phone home screen">
      </div>
      `;
      break;
    default:
      break;
  }
  return response;
}

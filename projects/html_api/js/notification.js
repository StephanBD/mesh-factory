function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// *****************************

const init = async () => {
  const permission = await Notification.requestPermission();
  // switch (permission) {
  //   case "granted":
  //     console.log("granted");
  //     break;
  //   case "denied":
  //     console.log("denied");
  //     break;
  //   default:
  //     console.log("default");
  // }
  // -----------------------
  const notify = (title, body) => {
    if (Notification.permission === "granted") {
      return new Notification(title, {
        body,
        icon: "https://i.imgur.com/2Qs6HQp.png"
      });
    }
    return null;
  };
  // -----------------------

  // -----------------------
  const showNotification = () => {
    const notification = notify("now playing", "song name");
    // -------
    if (notification) {
      notification.addEventListener("click", e => {
        // console.log(e)
        window.parent.focus();
        e.target.close();
      });
    }
  };
  // -----------------------
  setTimeout(showNotification, 1000);
  // -----------------------
};
// =====
if (`Notification` in window) {
  init();
}

// Notification.requestPermission().then(permission => {
//   console.log(permission);
// });

// new Notification("now playing", {
// 	  body: "song name",
// 	  icon: "https://i.imgur.com/2Qs6HQp.png"
// 	});

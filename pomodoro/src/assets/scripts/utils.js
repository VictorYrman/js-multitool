export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => {
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;

          installingWorker.onstatechange = () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              console.log("New service worker version available.");
              showUpdateNotification();
            }
          };
        };
      })
      .catch((err) => console.log("service worker not registered", err));
  }
};

export const playSound = (audioPath) => {
  const sound = new Audio(audioPath);
  sound.play();
};

export const convertTimerToTime = (timer) => {
  return {
    minutes: timer.getMinutes().toString().padStart(2, "0"),
    seconds: timer.getSeconds().toString().padStart(2, "0"),
  };
};

const progress = document.querySelector(".progress > span");
const progressTrack = document.querySelector(".progress");
let seconds;
let secondWidth;
let totalWidth = 0;

export const initProgress = (timer) => {
  progress.style.transition = "width 1s linear";
  seconds = timer.getMinutes() * 60 + timer.getSeconds();
  secondWidth = progressTrack.offsetWidth / seconds;
};

export const updateProgress = () => {
  totalWidth += secondWidth;
  progress.style.width = `${parseInt(totalWidth)}px`;
};

export const clearProgress = () => {
  progress.style.transition = "width 0.1s linear";
  totalWidth = 0;
  progress.style.width = "0px";
};

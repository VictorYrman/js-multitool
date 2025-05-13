let timer;
let pomodoroTimer = new Date(0, 0, 0, 0, 25, 0, 0);
let shortBreakTimer = new Date(0, 0, 0, 0, 5, 0, 0);
let longBreakTimer = new Date(0, 0, 0, 0, 15, 0, 0);
let breakAutostart = false;
let pomodoroAutostart = false;

export const initTimer = () => {
  const [minutes, seconds] = document
    .querySelector(".time")
    .textContent.split(":");
  timer = new Date(0, 0, 0, 0, minutes, seconds, 0);
};

export const getTimer = () => timer;

export const setTimer = (time) => {
  const [minutes, seconds] = time.split(":");
  timer.setMinutes(minutes);
  timer.setSeconds(seconds);
};

export const getPomodoroTimer = () => pomodoroTimer;

export const setPomodoroTimer = (time) => {
  const [minutes, seconds] = time.split(":");
  pomodoroTimer.setMinutes(minutes);
  pomodoroTimer.setSeconds(seconds);
};

export const getShortBreakTimer = () => shortBreakTimer;

export const setShortBreakTimer = (time) => {
  const [minutes, seconds] = time.split(":");
  shortBreakTimer.setMinutes(minutes);
  shortBreakTimer.setSeconds(seconds);
};

export const getLongBreakTimer = () => longBreakTimer;

export const setLongBreakTimer = (time) => {
  const [minutes, seconds] = time.split(":");
  longBreakTimer.setMinutes(minutes);
  longBreakTimer.setSeconds(seconds);
};

export const getBreakAutostart = () => breakAutostart;

export const setBreakAutostart = (value) => {
  breakAutostart = value;
};

export const getPomodoroAutostart = () => pomodoroAutostart;

export const setPomodoroAutostart = (value) => {
  pomodoroAutostart = value;
};

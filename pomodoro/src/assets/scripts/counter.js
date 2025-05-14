let pomodoroCounter = 1;
let breakCounter = 1;

export const incrementPomodoroCounter = () => {
  pomodoroCounter++;
};

export const getPomodoroCounter = () => {
  return pomodoroCounter;
};

export const incrementBreakCounter = () => {
  breakCounter++;
};

export const getBreakCounter = () => {
  return breakCounter;
};

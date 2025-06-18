export const implementAmount = () => {
  if (window.innerWidth <= 1220 && window.innerWidth >= 800) return 2;
  if (window.innerWidth <= 800) return 1;
  return 4;
};

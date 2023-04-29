export const matchMedia = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 4;
  } else {
    return 10;
  }
};

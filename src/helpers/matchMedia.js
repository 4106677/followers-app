export const matchMedia = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 3;
  } else {
    return 6;
  }
};

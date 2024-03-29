export const opacity = {
  initial: {
    y: 400,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 1,
  },
};

export const slide = {
  initial: {
    y: 400,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 1,
  },
};

export const off = {
  initial: {
    x: 0,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 1,
  },
};

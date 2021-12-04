import { animateScroll as scroll, scroller } from "react-scroll";

export const scrollTop = () => {
  scroll.scrollToTop();
};

export const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -50,
  });
};

export const compare = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

import { animateScroll as scroll, scroller } from "react-scroll";

export const scrollTop = () => {
  scroll.scrollToTop();
};

export const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: 50,
  });
};

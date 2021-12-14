import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import { scrollTop } from "../utils/helpers";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Arrow
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};

const Arrow = styled(FaArrowCircleUp)`
  position: fixed;
  bottom: 20px;
  right: 5vw;
  align-items: center;
  width: 40px;
  height: 40px;
  justify-content: center;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  

  &:hover {
    opacity: 1;
  }

  @media (max-width: 667px) {
    height: 35px;
  }
`;

export default ScrollArrow;

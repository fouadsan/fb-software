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
  width: 100%;
  bottom: 20px;
  left: 44vw;
  align-items: center;
  height: 40px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default ScrollArrow;

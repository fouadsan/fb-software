import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageViewer({ images, onClose }) {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const onClickHandler = (action) => {
    if (action === "prev") {
      if (index > 0) {
        setIsLoaded(false);
        setIndex((currentIndex) => (currentIndex -= 1));
      }
    } else if (action === "next") {
      if (index < images.length - 1) {
        setIsLoaded(false);
        setIndex((currentIndex) => (currentIndex += 1));
      }
    }
  };

  return (
    <Wrapper className="">
      <div className="close">
        <button type="button" className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="container">
        <button
          type="button"
          className="close-btn"
          onClick={() => onClickHandler("prev")}
        >
          <FaArrowCircleLeft />
        </button>
        <div className="image-container">
          {!isLoaded && <div className="loading"></div>}
          <Image
            show={isLoaded}
            src={images[index].src}
            alt={images[index].alt}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <button
          type="button"
          className="close-btn"
          onClick={() => onClickHandler("next")}
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black);
  z-index: 3;
  animation: fadeIn 0.5s;

  .close {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .close-btn {
    z-index: 4;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 2rem;
  }

  .loading {
    margin-top: 0;
    border-top-color: var(--clr-red-dark);
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 60%;
      height: 65%;
    }
  }
`;

const Image = styled.img`
  display: ${(props) => (props.show ? "inline" : "none")};
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    transition: var(--transition);
    cursor: zoom-in;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export default ImageViewer;

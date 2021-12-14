import React, { useState } from "react";
import styled from "styled-components";

function Thumbnail({ image }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Wrapper
      show={isImageLoaded}
      src={image}
      onLoad={() => setIsImageLoaded(true)}
      className="thumb"
      alt="project thumbnail"
    />
  );
}

const Wrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: ${(props) => (props.show ? "inline" : "none")};
  transition: var(--transition);
`;

export default Thumbnail;

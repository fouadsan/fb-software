import React from "react";
import styled from "styled-components";

function CoordinateItem({ coordinate }) {
  const { icon, title, text } = coordinate;
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <div className="text">
        <h5>{title}:</h5>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    padding: 0.7rem;
    background-color: var(--clr-primary-8);
    margin-bottom: 0.5rem;
    border-radius: 50%;

    svg {
      width: 32px;
      height: 32px;
      color: var(--clr-primary-1);
      transition-duration: 250ms;
    }
  }

  .text {
    padding: 0 1rem;
    width: 100%;

    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export default CoordinateItem;

import React from "react";
import styled from "styled-components";

import { socials } from "../constants";

function Socials() {
  return (
    <Wrapper className="social-btn-wrapper">
      {socials.map((item) => {
        const { id, title, icon } = item;
        return (
          <a key={id} href="/" className="social-btn" title={title}>
            <span className="social-container">{icon}</span>
          </a>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 225px;

  .social-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }

  .social-container {
    display: flex;
    align-items: center;
    svg {
      height: 1.6rem;
      margin-left: 5px;
      color: var(--clr-grey-3);
      transition-duration: 250ms;
    }

    &:hover {
      svg {
        color: var(--clr-primary-7);
      }
    }
  }
`;

export default Socials;

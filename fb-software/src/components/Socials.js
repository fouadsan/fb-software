import React from "react";
import styled from "styled-components";

import { SOCIALS } from "../utils/constants";

function Socials() {
  return (
    <Wrapper className="social-btn-wrapper">
      {SOCIALS.map((item) => {
        const { id, title, icon, link } = item;
        return (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title={title}
          >
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
      color: var(--clr-accent-3);
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

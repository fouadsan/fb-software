import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-scroll";

function CustomLink({ isSidebar, icon, name, onClickHandler }) {
  const [style, setStyle] = useState(isSidebar);

  useEffect(() => {
    if (isSidebar) {
      setStyle(true);
    }
    setStyle(false);
  }, [isSidebar]);

  return (
    <Container>
      <Wrapper
        style
        className={isSidebar ? "side-custom-link" : "nav-custom-link"}
        to={name}
        onClick={onClickHandler}
      >
        {style && icon}
        <span>{name}</span>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  .nav-custom-link {
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
    cursor: pointer;

    span {
      position: relative;
      color: var(--clr-primary-3);
      &:after {
        content: "";
        height: 2px;
        background-color: var(--clr-primary-7);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  .side-custom-link {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-accent-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    cursor: pointer;

    &:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-accent-10);
      color: var(--clr-accent-2);

      svg {
        color: var(--clr-accent-4);
      }
    }

    svg {
      font-size: 1.5rem;
      color: var(--clr-accent-5);
      margin-right: 1rem;
      transition: var(--transition);
    }
  }
`;

const Wrapper = styled(Link)``;

export default CustomLink;

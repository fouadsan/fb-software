import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import logo from "../assets/logo.svg";
import { links } from "../constants";
import { useGlobalContext } from "../context";
import Socials from "./Socials";

const Nav = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="comfy sloth" />
          </a>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url}>
                  <span>{text}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <Socials />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-3);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .social-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        span {
          position: relative;
          color: var(--clr-white);
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
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    }

    .social-btn-wrapper {
      display: flex;
    }
    .social-container {
      svg {
        color: var(--clr-white);
      }
    }
  }
`;

export default Nav;

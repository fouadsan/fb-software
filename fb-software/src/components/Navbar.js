import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import logo from "../assets/logo.svg";
import { LINKS } from "../utils/constants";
import { useGlobalContext } from "../context";
import Socials from "./Socials";

const Nav = () => {
  const { openSidebar } = useGlobalContext();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  };

  useEffect(() => {
    handleShow();
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <NavContainer show={show}>
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
          {LINKS.map((link) => {
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.show ? "rgba(255, 255, 255, 0.8)" : "var(--clr-primary-3)"};
  box-shadow: ${(props) => (props.show ? "var(--light-shadow);" : "")};
  z-index: 1;
  transition: var(--transition);

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
          color: ${(props) =>
            props.show ? "var(--clr-primary-3)" : "var(--clr-white)"};
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
        color: ${(props) =>
          props.show ? "var(--clr-primary-3)" : "var(--clr-white)"};
      }
    }
  }
`;

export default Nav;

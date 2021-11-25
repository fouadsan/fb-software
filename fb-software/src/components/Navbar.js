import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import logo from "../assets/logo.svg";
import { LINKS } from "../utils/constants";
import { scrollTop, scrollToElement } from "../utils/helpers";
import { useGlobalContext } from "../context";
import Socials from "./Socials";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(true);
  const { openSidebar } = useGlobalContext();
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname !== "/") {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
  }, [window.location.pathname]);

  const handleShow = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShadow(true);
      } else setShadow(false);
    });
  };

  useEffect(() => {
    handleShow();
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <NavContainer shadow={shadow}>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/" onClick={scrollTop}>
            <img src={logo} alt="comfy sloth" />
          </NavLink>
          {showLinks && (
            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {showLinks &&
            LINKS.map((link) => {
              const { id, name } = link;
              return (
                <li key={id}>
                  <CustomLink to={name} onClick={() => scrollToElement(name)}>
                    <span>{name}</span>
                  </CustomLink>
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
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: ${(props) => (props.shadow ? "var(--light-shadow)" : "")};
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
    }

    .social-btn-wrapper {
      display: flex;
    }
    .social-container {
      svg {
        color: var(--clr-primary-3);
      }
    }
  }
`;

const CustomLink = styled(Link)`
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
`;

export default Nav;

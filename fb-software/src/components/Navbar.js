import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { LINKS } from "../utils/constants";
import { scrollTop, scrollToElement } from "../utils/helpers";
import { useGlobalContext } from "../context";
import Socials from "./Socials";
import CustomLink from "./CustomLink";

const Nav = ({ showLinks, setShowLinks }) => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  const [shadow, setShadow] = useState(false);

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
          <NavLink
            to="/"
            onClick={() => {
              if (!showLinks) {
                setShowLinks(true);
              }
              scrollTop();
            }}
          >
            <img src={logo} alt="fouad b" />
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
                  <CustomLink
                    isSidebar={isSidebarOpen}
                    name={name}
                    onClickHandler={() => scrollToElement(name)}
                  />
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

export default Nav;

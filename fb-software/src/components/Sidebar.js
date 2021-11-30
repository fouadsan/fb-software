import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { LINKS } from "../utils/constants";
import { scrollTop, scrollToElement } from "../utils/helpers";
import { useGlobalContext } from "../context";
import Socials from "./Socials";
import CustomLink from "./CustomLink";

const Sidebar = ({ showLinks }) => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const handleClick = (name) => {
    closeSidebar();
    if (name) {
      scrollToElement(name);
    } else {
      scrollTop();
    }
  };

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img
            src={logo}
            alt="comfy sloth"
            className="logo"
            onClick={() => handleClick()}
          />

          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {showLinks &&
            LINKS.map(({ id, name, icon }) => {
              return (
                <li key={id}>
                  <CustomLink
                    isSidebar={isSidebarOpen}
                    icon={icon}
                    name={name}
                    onClickHandler={() => handleClick(name)}
                  >
                    {icon}
                    {name}
                  </CustomLink>
                </li>
              );
            })}
        </ul>
        <Socials />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    overflow: hidden;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .logo {
    justify-self: center;
    width: 130px;
    cursor: pointer;
  }

  .links {
    margin-bottom: 2rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;

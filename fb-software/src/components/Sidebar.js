import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import { LINKS } from "../utils/constants";
import { useGlobalContext } from "../context";
import Socials from "./Socials";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" className="logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {LINKS.map(({ id, name, icon }) => {
            return (
              <li key={id}>
                <a href={name} onClick={closeSidebar}>
                  {icon}
                  {name}
                </a>
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
    height: 45px;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-accent-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-accent-10);
    color: var(--clr-accent-2);
  }

  .links a svg {
    font-size: 1.5rem;
    color: var(--clr-accent-5);
    margin-right: 1rem;
    transition: var(--transition);
  }

  .links a:hover svg {
    color: var(--clr-accent-4);
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

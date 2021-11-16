import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context";

const Categories = ({ filterItems }) => {
  const { categories } = useGlobalContext();

  return (
    <Wrapper className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="btn filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;

  .filter-btn {
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-weight: 600;
    color: var(--clr-primary-1);
    box-shadow: none;

    &:hover {
      background: var(--clr-primary-5);
      color: var(--clr-white);
    }
  }

  @media (max-width: 679px) {
    flex-direction: column;
  }
`;

export default Categories;

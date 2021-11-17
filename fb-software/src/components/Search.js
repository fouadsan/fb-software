import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

function Search() {
  const { query, handleSearch } = useGlobalContext();
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <div className="form-control">
        <input
          type="text"
          name="text"
          placeholder="search"
          className="search search-input"
          value={query}
          onChange={handleSearch}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  margin-bottom: 0.7rem;
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    font-family: inherit;
    background-color: var(--clr-white);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
`;

export default Search;

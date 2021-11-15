import React, { useState } from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context";
import Error from "./Error";
import Loading from "./Loading";
import Categories from "./Categories";
import Projects from "./Projects";

function References() {
  const {
    projects_loading: loading,
    projects_error: error,
    projects,
  } = useGlobalContext();

  const [projectItems, setProjectItems] = useState(projects);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }
    const newItems = projects.filter((item) => item.category === category);
    setProjectItems(newItems);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Some References</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} />
      <Projects items={projectItems} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-accent-10);
  
  }

  @media (min-width: 576px) {
  }
`;

export default References;

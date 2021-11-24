import React, { useState, useEffect } from "react";
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

  const [projectItems, setProjectItems] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }
    const newItems = projects.filter((item) => item.category === category);
    setProjectItems(newItems);
  };

  useEffect(() => {
    setProjectItems(projects);
  }, [projects]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (projects.length < 1) {
    return (
      <h5 className="text-center">Sorry, no projects matched your search</h5>
    );
  }
  if (projectItems.length) {
    return (
      <Wrapper className="page-100">
        <div className="title">
          <h2>Some References</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Projects items={projectItems} />
      </Wrapper>
    );
  } else {
    return null;
  }
}

const Wrapper = styled.div`
  background: var(--clr-primary-10);
`;

export default References;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context";
import Error from "./Error";
import Loading from "./Loading";
import Categories from "./Categories";
import Projects from "./Projects";

function References() {
  let Scroll = require("react-scroll");
  let Element = Scroll.Element;

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

  if (projectItems.length) {
    return (
      <Element name="projects">
        <Wrapper className="page-100">
          <div className="title">
            <h2>Selected Projects</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} />
          <Projects items={projectItems} />
        </Wrapper>
      </Element>
    );
  } else {
    return (
      <Element name="projects">
        <Wrapper className="page-100">
          <div className="title">
            <h2>Some Projects</h2>
            <div className="underline"></div>
          </div>
          <Error />
        </Wrapper>
      </Element>
    );
  }
}

const Wrapper = styled.div`
  background: var(--clr-primary-10);
`;

export default References;

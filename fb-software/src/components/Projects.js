import React from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

function Projects({ items }) {
  return (
    <Wrapper className="section-center">
      {items.map((menuItem) => {
        const {
          id,
          title,
          category,
          thumb,
          images,
          description,
          repo_link,
          direct_link,
        } = menuItem;
        return (
          <ProjectItem
            key={id}
            title={title}
            category={category}
            thumb={thumb}
            images={images}
            description={description}
            repoLink={repo_link}
            directLink={direct_link}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Projects;

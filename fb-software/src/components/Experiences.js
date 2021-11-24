import React from "react";
import styled from "styled-components";

import { EXPERIENCES } from "../utils/constants";
import ResumeItem from "./ResumeItem";

function Experiences() {
  return (
    <Wrapper className="page-100">
      <div className="title">
        <h2>my experience</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="resume">
          <h3>education</h3>
          {EXPERIENCES.map((exp) => {
            return <ResumeItem key={exp.id} experience={exp} />;
          })}
        </div>
        <div className="resume">
          <h3>professional experience</h3>
          {EXPERIENCES.map((exp) => {
            return <ResumeItem key={exp.id} experience={exp} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-white);

  .section-center {
    margin-top: 4rem;
    display: flex;

    @media screen and (max-width: 657px) {
      flex-direction: column;

      .resume {
        margin-bottom: 1rem;
      }
    }
  }

  h3 {
    padding: 1rem 0;
  }
`;

export default Experiences;

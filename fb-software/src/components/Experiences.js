import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import ResumeItem from "./ResumeItem";
import { useGlobalContext } from "../context";
import Error from "./Error";
import Loading from "./Loading";

function Experiences() {
  const {
    experiences_loading: loading,
    experiences_error: error,
    experiences,
  } = useGlobalContext();

  const [education, setEducation] = useState([]);
  const [expos, setExpos] = useState([]);

  const filterExperiences = useCallback(() => {
    let educationArr = [];
    let experiencesArr = [];

    experiences.forEach((item) => {
      if (item.type === "education") {
        educationArr.push(item);
      } else {
        experiencesArr.push(item);
      }
      setEducation(educationArr);
      setExpos(experiencesArr);
    });
  }, [experiences]);

  useEffect(() => {
    filterExperiences();
  }, [filterExperiences]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="page-100">
      <div className="title">
        <h2>my experience</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {education.length > 0 && (
          <div className="resume">
            <h3>education</h3>
            {education.map((exp) => {
              return <ResumeItem key={exp.id} experience={exp} />;
            })}
          </div>
        )}

        {expos.length > 0 && (
          <div className="resume">
            <h3>professional experience</h3>
            {expos.map((exp) => {
              return <ResumeItem key={exp.id} experience={exp} />;
            })}
          </div>
        )}
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
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`;

export default Experiences;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import SetExperience from "./SetExperience";
import { useGlobalContext } from "../context";
import Error from "./Error";
import { compare } from "../utils/helpers";

function Experiences() {
  const {
    experiences_loading: loading,
    experiences_error: error,
    experiences,
  } = useGlobalContext();

  const [education, setEducation] = useState([]);
  const [expos, setExpos] = useState([]);
  const [certifications, setCertifications] = useState([]);

  const filterExperiences = useCallback(() => {
    let educationArr = [];
    let experiencesArr = [];
    let certificationsArr = [];

    const newExperiences = experiences.sort(compare);
    newExperiences.forEach((item) => {
      if (item.type === "education") {
        educationArr.push(item);
      } else if (item.type === "experience") {
        experiencesArr.push(item);
      } else {
        certificationsArr.push(item);
      }
      setEducation(educationArr);
      setExpos(experiencesArr);
      setCertifications(certificationsArr);
    });
  }, [experiences]);

  useEffect(() => {
    filterExperiences();
  }, [filterExperiences]);

  if (loading) {
    return null;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="page-100">
      <div className="title">
        <h2>my resume</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {education.length > 0 && (
          <SetExperience exp={education} title="education" />
        )}
        {certifications.length > 0 && (
          <SetExperience exp={certifications} title="certifications" />
        )}
        {expos.length > 0 && <SetExperience exp={expos} title="experience" />}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-white);

  .section-center {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .resume {
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  h3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 1200px) {
    .section-center {
      flex-direction: row;

      .resume {
        margin-right: 1rem;
      }
    }

    h3 {
      padding-top: 2rem;
    }
  }
`;

export default Experiences;

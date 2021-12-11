import React from "react";
import ResumeItem from "./ResumeItem";

function SetExperience({ exp, title }) {
  return (
    <div className="resume">
      <h3>{title}</h3>
      {exp.map((exp) => {
        return <ResumeItem key={exp.id} experience={exp} />;
      })}
    </div>
  );
}

export default SetExperience;

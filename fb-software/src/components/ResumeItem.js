import React from "react";
import styled from "styled-components";

function ResumeItem({ experience }) {
  const { title, start_date, end_date, place, description } = experience;
  return (
    <Wrapper>
      <h4>{title}</h4>
      <h5>
        {start_date} - {end_date}
      </h5>
      <p>
        <em>{place}</em>
      </p>
      <ul>
        <li>{description}</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0 2rem 2rem;
  border-left: 2px solid var(--clr-primary-3);
  position: relative;

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    background: var(--clr-accent-10);
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
  }

  ul {
    padding-left: 20px;
    margin-right: 20px;

    li {
      padding-bottom: 10px;
      word-wrap: break-word;
      margin-bottom: 0;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: var(--clr-white);
    border: 2px solid var(--clr-primary-3);
  }
`;

export default ResumeItem;

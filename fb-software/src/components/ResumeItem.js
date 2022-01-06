import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import moment from "moment";

function ResumeItem({ experience }) {
  const { title, type, start_date, end_date, place, description, url } =
    experience;
  const [newDate, setNewDate] = useState({});

  const getDateWithoutTimestamp = useCallback(
    (enteredDate) => {
      let newDateWithoutTimeStamp = enteredDate.toDate();
      if (type === "education") {
        newDateWithoutTimeStamp = newDateWithoutTimeStamp
          .getFullYear()
          .toString()
          .trim();
      } else {
        newDateWithoutTimeStamp = moment(newDateWithoutTimeStamp).format(
          "MMMM, YYYY"
        );
      }

      return newDateWithoutTimeStamp;
    },
    [type]
  );

  useEffect(() => {
    let new_end_date;
    const new_start_date = getDateWithoutTimestamp(start_date);

    if (typeof end_date === "string") {
      new_end_date = end_date;
    } else {
      new_end_date = getDateWithoutTimestamp(end_date);
    }

    setNewDate({
      new_start_date,
      new_end_date,
    });
  }, [getDateWithoutTimestamp, start_date, end_date]);

  return (
    <Wrapper>
      {type === "certification" ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h4>{title}</h4>
        </a>
      ) : (
        <h4>{title}</h4>
      )}

      {newDate && (
        <h5>
          {newDate.new_start_date} - {newDate.new_end_date}
        </h5>
      )}

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

  a {
    color: red;

    &:hover {
      color: var(--clr-primary-1);
    }
  }

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
    list-style: inside;

    li {
      padding-bottom: 10px;
      word-wrap: break-word;
      margin-bottom: 0;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
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

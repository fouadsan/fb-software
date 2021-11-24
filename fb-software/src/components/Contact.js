import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";
import CoordinateItem from "./CoordinateItem";
import { COORDINATES } from "../utils/constants";

function Contact() {
  return (
    <Wrapper className="page-100">
      <div className="title">
        <h2>contact me</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="contact-container">
          <div className="coordinates">
            {COORDINATES.map((coordinate) => {
              return (
                <CoordinateItem key={coordinate.id} coordinate={coordinate} />
              );
            })}
          </div>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-primary-10);

  .section-center {
    margin-top: 4rem;
  }

  .contact-container {
    display: flex;
  }

  .coordinates {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media screen and (max-width: 992px) {
    .contact-container {
      flex-direction: column;
    }

    .coordinates {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;

export default Contact;

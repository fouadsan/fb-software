import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

import Socials from "./Socials";
import heroImg from "../assets/hero-dev.jpg";
import { cvUrl } from "../utils/constants";

const Hero = () => {
  let Scroll = require("react-scroll");
  let Element = Scroll.Element;

  return (
    <Element name="home">
      <Wrapper className="section-center">
        <article className="text-container">
          <div className="title">
            <h1>fouad benayad</h1>
            <div className="underline"></div>
          </div>
          <div className="text-paragraph">
            <p>
              A{" "}
              <Typical
                steps={[
                  "web developer.",
                  2000,
                  "mobile developer.",
                  2000,
                  "professional Software Developer with 3 years of experience in Web & Mobile development.",
                  10000,
                ]}
                wrapper="span"
              />
            </p>
          </div>
          <HeroBtnsContainer>
            <Socials />
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn"
            >
              View Cv
            </a>
          </HeroBtnsContainer>
        </article>

        <article className="img-container">
          <img src={heroImg} alt="nice table" className="main-img" />
        </article>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin-top: 5rem;
  overflow: hidden;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Indie Flower", cursive;
    width: 100%;

    h1 {
      font-size: 48px;
      font-weight: 600;
    }

    .text-paragraph {
      min-height: 230px;
    }

    p {
      width: 100%;
      margin-top: 1rem;
      font-size: 28px;
    }
  }

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    margin-top: auto;
    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .img-container {
      display: block;
      height: 570px;
      position: relative;
      animation: roll 10s infinite;
    }

    .main-img {
      width: 100%;
      height: 100%;
      position: relative;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    padding-bottom: 2rem;

    .text-paragraph {
      height: 50vh;
    }
  }
`;

const HeroBtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  .hero-btn {
    padding: 0.6rem 1.5rem;
    margin-right: 0.5rem;
    font-weight: 600;
    display: flex;
    font-size: 1.25rem;
  }

  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  @media (max-width: 1053px) {
    .hero-btn {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1053px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 387px) {
    flex-direction: column;
    align-items: center;

    .social-btn-wrapper {
      margin-bottom: 1.5rem;
    }
  }
`;

export default Hero;

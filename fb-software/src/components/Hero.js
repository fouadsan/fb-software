import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

import Socials from "./Socials";
import heroImg from "../assets/hero-dev.jpg";

const Hero = () => {
  let Scroll = require("react-scroll");
  let Element = Scroll.Element;

  return (
    <Element name="about">
      <Wrapper className="section-center">
        <article className="text-container">
          <div className="title">
            <h1>fouad benayad</h1>
            <div className="underline"></div>
          </div>
          <p>
            A{" "}
            <Typical
              steps={[
                "web developer",
                2000,
                "mobile developer",
                2000,
                "cyber security engineer",
                2000,
                "professional Software Developer with 3 years of experience in Web & Mobile development.",
                10000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </p>

          <HeroBtnsContainer>
            <Socials />
            <a href="/" className="btn hero-btn">
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

  .text-container {
    font-family: "Kaushan Script", cursive;
    width: 100%;

    h1 {
      font-size: 48px;
      font-weight: 600;
    }

    p {
      min-height: 230px;
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

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .img-container {
      display: block;
      position: relative;
      cursor: pointer;
      animation: roll 10s infinite;
    }

    .main-img {
      width: 100%;
      height: 600px;
      position: relative;
      display: block;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 2rem;
  }
`;

const HeroBtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  .hero-btn {
    padding: 0.75rem 1.5rem;
    margin-right: 0.5rem;
    font-weight: 600;
    display: flex;
    font-size: 1.25rem;

    svg {
      font-size: 1.5rem;
      margin-right: 1rem;
    }

    @media (max-width: 1053px) {
      font-size: 0.9rem;

      svg {
        font-size: 1.2rem;
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
  }
`;

export default Hero;

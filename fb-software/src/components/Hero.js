import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import heroIcon from "../assets/hero-dev.jpg";

// import { services } from "../constants";

// const heroType = (word) => {
//   const letters = [...word];
//   console.log("letters:", letters);
//   let idx = 0;
//   let res = "";
//   setInterval(() => {
//     res = letters[idx];
//     idx++;

//     if (idx >= letters.length) {
//       idx = 0;
//     }
//     return res;
//   }, 1000);
// };

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h4>development entreprise specialised in: </h4>
        <br />
        {/* {services.map((service) => {
          const { id, title } = service;
          return;
        })} */}

        <h3>web, mobile, desktop apps</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          possimus omnis amet doloribus saepe, velit totam facere, nemo ut animi
          voluptatibus sunt eaque recusandae enim, quae fugit suscipit vitae
          soluta explicabo. Distinctio vero itaque saepe voluptate delectus,
          quae laborum! Dolore, ea! Illum at quia est enim ipsum voluptatem
          distinctio obcaecati.
        </p>

        <HeroBtnsContainer>
          <a href="/" className="btn hero-btn">
            <FaEnvelope />
            contact us
          </a>
          <a href="/" className="btn hero-btn">
            <FaPhone />
            call now
          </a>
        </HeroBtnsContainer>
      </article>

      <article className="img-container">
        <img src={heroIcon} alt="nice table" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

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
      border-radius: 50%;
      cursor: pointer;
      animation: roll 10s infinite;
    }

    .main-img {
      width: 100%;
      height: 470px;
      position: relative;
      border-radius: 50%;
      display: block;
      object-fit: cover;
    }
  }
`;

const HeroBtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  .hero-btn {
    padding: 0.75rem 1.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
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
`;

export default Hero;

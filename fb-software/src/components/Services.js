import React from "react";
import styled from "styled-components";

import { SERVICES } from "../utils/constants";

const Services = () => {
  let Scroll = require("react-scroll");
  let Element = Scroll.Element;

  return (
    <Element name="services">
      <Wrapper>
        <div className="title">
          <h2>services i provide</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <div className="services-center">
            {SERVICES.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <article className="single-service" key={id}>
                  <div className="service-thumb">
                    <div className="service-icon">
                      <img src={icon} alt="" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.section`
  background: var(--clr-white);

  .title {
    padding-top: 4rem;
  }

  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
  }

  .single-service {
    background-color: var(--clr-primary-9);
    padding: 70px 25px 65px 25px;
    border: 0.25rem solid var(--clr-primary-3);
    border-radius: var(radius);
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);

    &:hover {
      background-color: var(--clr-accent-8);
    }
  }

  .service-thumb {
    height: 100px;
    width: 120px;
    background-repeat: no-repeat;
    margin: auto auto 1rem auto;
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .service-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-weight: 600;
      margin-top: 43px;
      margin-bottom: 22px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;

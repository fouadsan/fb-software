import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { technologies } from "../constants";

function Technologies() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper className="page-100">
      <div className="title">
        <h2>Technologies We Use</h2>
        <div className="underline"></div>
      </div>
      <Carousel {...settings}>
        {technologies.map((tech) => {
          const { id, name, logo } = tech;

          return (
            <div key={id} className="img-container">
              <img src={logo} alt={name} />
            </div>
          );
        })}
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-primary-10);
  .title {
    margin-top: 4rem;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 6rem;
  ul li button {
    &:before {
      font-size: 10px;
      color: var(--clr-primary-3);
    }
  }

  li.slick-active button::before {
    color: var(--clr-primary-1);
  }

  .slick-list {
    overflow: visible;
  }
  button {
    &::before {
      color: var(--clr-primary-3);
    }
    z-index: 1;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .img-container {
    cursor: pointer;
    height: 150px;

    img {
      padding: 0;
      border: 4px solid var(--clr-primary-7);
      width: 90%;
      height: 90%;
      object-fit: contain;
      opacity: 0.7;
      transition: var(--transition);
      &:hover {
        border-color: var(--clr-primary-4);
        opacity: 1;
      }
    }
  }
`;

export default Technologies;

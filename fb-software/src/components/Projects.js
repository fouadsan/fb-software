import React from "react";
import styled from "styled-components";
// import ImgsViewer from "react-images-viewer";
import { FaSearch } from "react-icons/fa";

function Projects({ items }) {
  // const IMG_SET = [
  //   {
  //     src: "http://example.com/img1.svg",
  //     caption: "A forest",
  //     // As an array
  //     srcSet: [
  //       "http://example.com/img1_1024.jpg 1024w",
  //       "http://example.com/img1_800.jpg 800w",
  //       "http://example.com/img1_500.jpg 500w",
  //       "http://example.com/img1_320.jpg 320w",
  //     ],
  //   },
  // ];

  return (
    <Wrapper className="section-center">
      {items.map((menuItem) => {
        const { id, name, image, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <div className="project-imgs">
              {/* <ImgsViewer imgs={IMG_SET} /> */}
              <img src={image} alt={name} className="thumb" />
              <a href="/" className="link">
                <FaSearch />
              </a>
            </div>
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">mobile</h4>
              </header>
              <p className="item-desc">
                miloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremiloremmiloremilorem
              </p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    width: 100%;
    max-width: 25rem;
    overflow: hidden;
  }

  .item-info {
    width: 100%;
  }

  .project-imgs {
    position: relative;
    border: 0.25rem solid var(--clr-primary-3);
    border-radius: var(--radius);

    &:hover {
      .thumb {
        opacity: 0.5;
      }
      .link {
        opacity: 1;
      }
    }
  }

  .thumb {
    height: 200px;
    width: 100%;
    object-fit: cover;
    display: block;
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .thumb:hover .link {
    opacity: 1;
  }

  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted var(--clr-primary-1);
  }
  .item-info h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-gold);
  }
  .item-desc {
    display: -webkit-box;
    width: 320px;
    word-wrap: break-word;
    margin-bottom: 0;
    padding-top: 1rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }

    .thumb {
      height: 175px;
    }

    .item-desc {
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;

    .thumb {
      height: 150px;
    }
  }

  @media screen and (max-width: 767px) {
    .item-desc {
      width: 380px;
    }
  }

  @media (max-width: 480px) {
    .item-desc {
      width: 90vw;
    }
  }
`;

export default Projects;

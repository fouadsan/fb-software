import React from "react";
import styled from "styled-components";

function Projects({ items }) {
  return (
    <Wrapper className="section-center">
      {items.map((menuItem) => {
        const { id, name, image, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={image} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{name}</p>
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
    max-width: 25rem;
  }

  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid var(--clr-gold);
    border-radius: var(--radius);
    display: block;
  }

  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted var(--clr-grey-5);
  }

  .item-info h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--clr-gold);
  }

  .item-text {
    margin-bottom: 0;
    padding-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 400px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }

    .photo {
      height: 175px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;

    .photo {
      height: 150px;
    }
  }
`;

export default Projects;

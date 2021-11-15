import React from "react";

function Projects({ items }) {
  console.log(items);
  if (items) {
    return (
      <div className="section-center">
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
      </div>
    );
  } else {
    return null;
  }
}

export default Projects;

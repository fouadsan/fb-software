import React, { useState } from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";

import Thumbnail from "./Thumbnail";
import ImageViewer from "./ImageViewer";

function ProjectItem({ title, category, thumb, images, description }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [projectImages, setProjectImages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const openImageViewer = (images) => {
    document.body.style.overflow = "hidden";
    setProjectImages(images);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    document.body.style.overflow = "visible";
    setIsViewerOpen(false);
    setProjectImages([]);
  };

  return (
    <Wrapper className="menu-item" expandable={isExpanded}>
      <div className="project-imgs">
        <Thumbnail imageUrl={thumb} />
        <button
          type="button"
          className="link"
          onClick={() => openImageViewer(images)}
        >
          <FaEye />
        </button>
        {isViewerOpen && (
          <ImageViewer
            images={projectImages}
            visible={isViewerOpen}
            onClose={closeImageViewer}
          />
        )}
      </div>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="category">{category}</h4>
        </header>
        <p className="item-desc">{description}</p>
        {description.length > 70 && (
          <button
            type="button"
            className="btn btn-expand"
            onClick={(currState) => setIsExpanded(!isExpanded)}
          >
            <small>{isExpanded ? "less" : "read more"}</small>
          </button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  gap: 1rem 2rem;
  width: 100%;
  height: 180px;
  max-width: 25rem;

  .item-info {
    width: 100%;
  }

  .project-imgs {
    position: relative;
    border: 0.25rem solid var(--clr-primary-3);
    border-radius: var(--radius);
    overflow: hidden;
    background-color: var(--clr-primary-8);

    &:hover {
      .thumb {
        opacity: 0.5;
      }
      .link {
        opacity: 1;
      }
    }
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
    border: none;
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
  .category {
    color: var(--clr-gold);
  }
  .item-desc {
    display: -webkit-box;
    width: 320px;
    word-wrap: break-word;
    margin-bottom: 0;
    padding-top: 1rem;
    -webkit-line-clamp: ${(props) => (props.expandable ? "6" : "2")};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btn-expand {
    float: right;
    padding: 0;
    font-size: 0.775rem;
    font-weight: 600;
    text-transform: none;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;

    .item-desc {
      width: 300px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 300px;

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

export default ProjectItem;

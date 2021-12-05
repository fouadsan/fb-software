import React from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import styled from "styled-components";

import { useGlobalContext } from "../context";

const Modal = () => {
  const {
    modal_content: content,
    modal_content_type: type,
    closeModal,
  } = useGlobalContext();

  return (
    <Wrapper success={type === "success"}>
      <div className="modal-container">
        <div className="msg-container">
          {type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
          <h5>{content}</h5>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 3;
  animation: fadeIn 0.5s;

  svg {
    font-size: 28px;
  }

  .modal-container {
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 90vw;
    height: 15vh;
    max-width: var(--fixed-width);
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }

  .msg-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    svg {
      margin-bottom: 0.7rem;
      margin-right: 1rem;
      color: ${(props) => (props.success ? "green" : "red")};
    }
  }

  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    svg {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    h5 {
      font-size: 0.7rem;
    }
  }
`;

export default Modal;

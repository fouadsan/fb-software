import React from "react";
import styled from "styled-components";

function ContactForm() {
  return (
    <Wrapper>
      <form className="form">
        <div className="form-group">
          <div className="form-control">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-control">
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="form-control">
          <textarea type="text" placeholder="Message" />
        </div>
        <button className="btn">submit</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    display: flex;
  }

  .form-control {
    padding: 1rem;
    width: 100%;
  }

  input {
    padding: 1rem;
    width: 100%;
    height: 44px;
  }

  textarea {
    display: block;
    width: 100%;
    height: 200px;
    padding: 10px 12px;
    resize: none;
    box-shadow: none;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid var(--clr-primary-7);
  }

  button {
    align-self: center;
    font-weight: 600;
  }
`;

export default ContactForm;

import React, { useState, useRef } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { useGlobalContext } from "../context";

function ContactForm() {
  const { openModal } = useGlobalContext();
  const [isLoading, setLoading] = useState(false);

  const form = useRef();

  return (
    <Formik
      initialValues={{ email: "", name: "", subject: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.subject) {
          errors.subject = "Required";
        }

        if (!values.message) {
          errors.message = "Required";
        } else if (values.message.length < 20) {
          errors.message = "Your message is too short";
        }

        return errors;
      }}
      onSubmit={async (_, { setSubmitting, resetForm }) => {
        setLoading(true);
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        let message;
        try {
          const response = await emailjs.sendForm(
            "service_e4v83qr",
            "template_5gk20tf",
            form.current,
            "user_yY5XG1I3EC4jADAQINPfF"
          );
          resetForm();

          if (response.status === 200) {
            message = "Your email has been sent, check your email!";
            alert("Your email has been sent, check your email!");
          } else {
            message = "Somthing went wrong, please try again later!";
            alert("Somthing went wrong, please try again later!");
          }
        } catch (error) {
          message = error.message;
          alert(error);
        }

        setLoading(false);
        openModal(message);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Wrapper>
          <form ref={form} className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && errors.name}
              </div>
            </div>

            <div className="form-control">
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                placeholder="Subject"
              />
              {errors.subject && touched.subject && errors.subject}
            </div>

            <div className="form-control">
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Message"
              />
              {errors.message && touched.message && errors.message}
            </div>
            {isLoading ? (
              <button type="submit" className="btn" disabled={isSubmitting}>
                <div className="loading loading-sm"></div>
              </button>
            ) : (
              <button type="submit" className="btn" disabled={isSubmitting}>
                Submit
              </button>
            )}
          </form>
        </Wrapper>
      )}
    </Formik>
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
    min-width: 100px;
    min-height: 2.2rem;
  }

  .loading-sm {
    width: 1rem;
    height: 1rem;
    margin-top: 0;
  }
`;

export default ContactForm;

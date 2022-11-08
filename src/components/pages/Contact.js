import React, { useRef, useState } from "react";
import { validateEmail } from "../utils/helpers.js";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = contactFormState;

  function handleContact(e) {
    // Checks if all fields have been entered and validating email
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value);
      if (!validEmail) {
        setErrorMessage("Please enter a valid email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setContactFormState({
        ...contactFormState,
        [e.target.name]: e.target.value,
      });
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9ozccg",
        "template_i728ryi",
        e.target,
        "cRjguA3pkusSgJPh5"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer">
      <h1 className="contactHead">Contact Me</h1>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <div>
          <label for="name">Name:</label>
          <br></br>
          <input
            className="contactForm"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleContact}
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <br></br>
          <input
            className="contactForm"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleContact}
          />
        </div>
        <div>
          <label for="message">Message:</label>
          <br></br>
          <textarea
            className="contactText"
            name="message"
            defaultValue={message}
            onBlur={handleContact}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="contactErr">{errorMessage}</p>
          </div>
        )}
        <div>
          <input className="contactBtn" type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
}

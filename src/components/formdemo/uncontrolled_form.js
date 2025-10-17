import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Form Submitted:\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input type="text" ref={nameRef} placeholder="Enter your name" />
        </label>
        <br />
        <label>
          Email:{" "}
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;

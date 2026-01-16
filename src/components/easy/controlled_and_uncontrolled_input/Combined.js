import { useState,useRef } from "react";


function FormExample() {
  const [name, setName] = useState("");
  const emailRef = useRef(null);

  function handleSubmit() {
    console.log({
      controlled: name,
      uncontrolled: emailRef.current.value,
    });
  }

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Controlled name"
      />

      <input
        ref={emailRef}
        placeholder="Uncontrolled email"
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default FormExample;

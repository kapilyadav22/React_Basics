import { useState } from "react";
import Input from "./Input";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleBlur(e) {
    if (!e.target.value.trim()) {
      setError("Email is required");
    }
  }

  function handleChange(e) {
    setEmail(e.target.value);
    setError("");
  }

  return (
    <form aria-label="Login form">
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        helperText="We’ll never share your email"
        error={error}
        placeholder="Enter email"
      />
    </form>
  );
}

export default LoginForm;

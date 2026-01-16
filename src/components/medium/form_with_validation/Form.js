import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  function validate(name, value) {
    if (!value) return "Required";
    // if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
    //   return "Invalid email";
    // }
    return "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    const error = validate(name, value);
    if (error) setErrors({ ...errors, [name]: error });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validate(key, form[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitted", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Name"
      />
      {errors.name && <small>{errors.name}</small>}

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
      />
      {errors.email && <small>{errors.email}</small>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
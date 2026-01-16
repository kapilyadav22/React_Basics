import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        break;

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Invalid email format";
        break;

      case "role":
        if (!value) return "Role is required";
        break;

      case "terms":
        if (!value) return "You must accept terms";
        break;

      default:
        return "";
    }
    return "";
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleBlur(e) {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    const error = validateField(name, fieldValue);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Registration form">
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={errors.name}
        helperText="Enter your full name"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={errors.email}
        helperText="We'll never share your email"
      />

      <Select
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={errors.role}
        options={[
          { label: "Frontend", value: "frontend" },
          { label: "Backend", value: "backend" },
        ]}
      />

      <Checkbox
        label="Accept Terms"
        name="terms"
        checked={form.terms}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={errors.terms}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

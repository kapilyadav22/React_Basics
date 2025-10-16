// Simplifies form state management.

import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}

export default useForm;


// Use case: Any form input handling + reset.
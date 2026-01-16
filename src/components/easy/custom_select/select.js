import { forwardRef } from "react";

const Select = forwardRef(function Select(
  {
    label,
    value,
    onChange,
    onBlur,
    options,
    required,
    error,
    id,
    ...props
  },
  ref
) {
  const selectId = id || `select-${Math.random().toString(36).slice(2)}`;

  return (
    <div>
      {label && (
        <label htmlFor={selectId}>
          {label} {required && "*"}
        </label>
      )}

      <select
        id={selectId}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={!!error}
        {...props}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {error && <small role="alert">{error}</small>}
    </div>
  );
});

export default Select;


/*
<Select
  label="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  onBlur={handleBlur}
  required
  error={errors.role}
  options={[
    { label: "Frontend", value: "fe" },
    { label: "Backend", value: "be" },
  ]}
/>

*/

/*
Why this version is ideal for interviews
Controlled
Accessible
Supports label, required, onBlur, error
No unnecessary helpers
*/
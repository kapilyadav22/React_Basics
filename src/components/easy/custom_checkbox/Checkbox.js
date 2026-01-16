import { forwardRef } from "react";

const Checkbox = forwardRef(function Checkbox(
  {
    label,
    checked,
    onChange,
    onBlur,
    required,
    error,
    id,
    ...props
  },
  ref
) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2)}`;

  return (
    <div>
      <input
        id={checkboxId}
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={!!error}
        {...props}
      />

      {label && (
        <label htmlFor={checkboxId}>
          {label} {required && "*"}
        </label>
      )}

      {error && <small role="alert">{error}</small>}
    </div>
  );
});

export default Checkbox;


/*
<Checkbox
  label="Accept Terms"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
  onBlur={handleBlur}
  required
  error={errors.accepted}
/>
*/


/*s
Why this version is ideal
  Controlled
  Fully accessible
  Supports label, required, onBlur, error
  Minimal logic (≈20 lines)
  No over-engineering
*/
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, id, error, helperText, required, ...props },
  ref
) {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId}>
          {label} {required && "*"}
        </label>
      )}

      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={helperText ? `${inputId}-help` : undefined}
        {...props}
      />

      {helperText && (
        <small
          id={`${inputId}-help`}
          style={{ color: "#666", display: "block", marginTop: "4px" }}
        >
          {helperText}
        </small>
      )}

      {error && (
        <small
          role="alert"
          style={{
            color: "#d32f2f",
            display: "block",
            marginTop: "4px",
            fontWeight: "500",
          }}
        >
          {error}
        </small>
      )}
    </div>
  );
});

/*
Reusable Input Component
Features
 - Controlled input
 - Label + error handling
 - Forward ref support
 - Works for text, password, email, etc.
 - Easily stylable

 ⭐ Advanced Version (Interview-Impressive)
    Adds:
    onBlur
    helperText
    required
    Accessibility
 */

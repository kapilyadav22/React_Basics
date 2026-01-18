import { useState, useEffect, useCallback } from "react";

const colors = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
};

const Toast = ({ id, message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      style={{
        backgroundColor: colors[type],
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        // animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      {message}
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => addToast("Success message!", "success")}>
          Success
        </button>
        <button onClick={() => addToast("Error occurred!", "error")}>
          Error
        </button>
        <button onClick={() => addToast("Just FYI!", "info")}>Info</button>
        <button onClick={() => addToast("Warning!", "warning")}>Warning</button>
      </div>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          justify: "center",
          zIndex: 1000,
          width: "200px",
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={2000}
            onClose={removeToast}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;

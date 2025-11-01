import React, { useState, useEffect } from "react";

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "warning":
        return "#ff9800";
      default:
        return "#2196f3";
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(type),
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      {message}
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <div style={{ marginBottom: "20px"}}>
        <button onClick={() => addToast("Success message!", "success")}>Success</button>
        <button onClick={() => addToast("Error occurred!", "error")}>Error</button>
        <button onClick={() => addToast("Just FYI!", "info")}>Info</button>
        <button onClick={() => addToast("Warning!", "warning")}>Warning</button>
      </div>

      <div
        style={{
        //   position: "fixed",
          top: "20px",
          right: "20px",
          justify:'center',
          zIndex: 1000,
          width: '200px'
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: "8px",
          padding: "20px",
          minWidth: "300px",
          zIndex: 1001,
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        {children}
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") 
  );
};

export default Modal;

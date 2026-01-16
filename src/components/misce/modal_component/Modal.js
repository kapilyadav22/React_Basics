import { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "16px",
          minWidth: "300px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            fontSize: "16px",
          }}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;


/*

🧠 Key Interview Talking Points
1️⃣ Why conditional rendering?
    if (!isOpen) return null;

    Prevents:
Unnecessary DOM nodes
Event listeners firing when modal is closed


2️⃣ Why stopPropagation()?
  onClick={(e) => e.stopPropagation()}

Prevents overlay click from closing the modal when clicking inside content.


❓ How would you prevent background scroll?
useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
}, [isOpen]);


❓ How to render modal at top of DOM?

Use React Portal (advanced).

⭐ Portal-Based Modal (Mention, optional)

import { createPortal } from "react-dom";

return createPortal(
  <ModalContent />,
  document.getElementById("modal-root")
);

*/
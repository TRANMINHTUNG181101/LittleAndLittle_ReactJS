import "./Modal.css";
import React, { useState } from "react";
import ImageIcon from "../../images/x.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClose = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isTransitioning) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-content">
        {children}
        <button className="modal-close-button" onClick={handleClose}>
          <img src={ImageIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Modal;

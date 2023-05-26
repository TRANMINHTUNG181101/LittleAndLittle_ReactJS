import "./ModalWarning.css";
import React, { useState } from "react";
import ImageIcon from "../../images/x.png";
import ImageFace from "../../images/Layer 1.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const ModalWarning: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
    <div className={`modal-warning ${isOpen ? "open" : ""}`}>
      <div className="modal-warning-overlay" onClick={handleClose} />
      <div className="modal-warning-content">
        <img src={ImageFace} alt="" className="face" />
        {children}
      </div>
    </div>
  );
};

export default ModalWarning;

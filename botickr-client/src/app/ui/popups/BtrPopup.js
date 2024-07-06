import React from 'react';
import styles from '../../styles/popups/BtrPopup.module.css';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;

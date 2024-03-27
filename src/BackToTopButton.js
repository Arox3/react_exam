// BackToTopButton.js
import React from 'react';

const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={handleBackToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '40px', // กำหนดความกว้างของปุ่ม
        height: '40px', // กำหนดความสูงของปุ่ม
        borderRadius: '50%', // กำหนดให้เป็นวงกลม
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* รูปภาพหรือไอคอนที่ใช้เป็นปุ่ม */}
      {/* เช่น ใช้ Font Awesome หรือ Material Icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6, 16 12, 9 18, 16"></polyline>
      </svg>
    </button>
  );
};

export default BackToTopButton;

// CardProfile.js
import React from "react";

const CardProfile = ({ profile }) => {
  return (
    <div
      style={{
        width: "350px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // เพิ่มเงา
        backgroundColor: "#fff", // เพิ่มสีพื้นหลัง
      }}
    >
      <div
        style={{
          flex: "1", // ข้อความเต็มพื้นที่
          marginRight: "20px", // ระยะห่างระหว่างรูปภาพกับข้อความ
        }}
      >
        <h2 style={{ margin: "0 0 10px 0" }}>{profile.name}</h2>
        <p style={{ margin: "0" }}>{profile.address}</p>
      </div>
      <img
        src={profile.avatar}
        alt="Profile Avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // เพิ่มเงารอบรูปภาพ
        }}
      />
    </div>
  );
};

export default CardProfile;

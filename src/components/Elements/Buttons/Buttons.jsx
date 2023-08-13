import React from "react";
import "./Button.css";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="primarybutton">
      {children}
    </div>
  );
};

export const OutlinedButton = ({ children, onClick, loading, width }) => {
  return (
    <button
      disabled={loading}
      style={{ width: width }}
      onClick={onClick}
      className="outlinedbutton"
    >
      {!loading && <span>{children}</span>}
      {loading && <div className="spinner"></div>}
    </button>
  );
};

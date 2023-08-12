import React from "react";
import "./Button.css";

function PrimaryButton({ children, onClick }) {
  return (
    <div onClick={onClick} className="primarybutton">
      {children}
    </div>
  );
}

export default PrimaryButton;

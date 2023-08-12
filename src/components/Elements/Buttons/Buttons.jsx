import React from "react";
import "./Button.css";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="primarybutton">
      {children}
    </div>
  );
}


export const OutlinedButton = ({ children, onClick })  => {
  return (
    <div onClick={onClick} className="outlinedbutton">
      {children}
    </div>
  );
}
import React from "react";

function Input({ type, placeholder, label, width,setValue,value }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        onChange={(e) => setValue(e.target.value)}
        style={{ width: width }}
        placeholder={placeholder}
        className="input"
        type={type}
      />
    </div>
  );
}

export default Input;

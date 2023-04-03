import React from "react";

const Input = ({ label, text, type = "text", state, setState }) => {
  return (
    <div className="w-96">
      <label>{label}</label>
      <input
        type={type}
        placeholder={text}
        className="w-full h-10 border outline-none p-3 my-2 rounded-md"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default Input;

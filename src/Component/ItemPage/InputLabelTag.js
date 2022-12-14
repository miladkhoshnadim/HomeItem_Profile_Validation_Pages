// import { useState } from "react";

export const InputLabelTag = ({ label, setInputItemVal }) => {
  function handleInputChengeVal(e) {
    console.log("!@#", {
      [e.target.name]: e.target.value,
    });
    setInputItemVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="divInputPageItems">
      <label className="LabelTagInfoF">
        {label} <span className="SpanStar">*</span>
      </label>
      <input
        className="inputPageItem"
        name={label}
        onChange={handleInputChengeVal}
      />
    </div>
  );
};

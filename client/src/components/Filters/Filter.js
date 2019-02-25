import React from "react";

export default function Filter({ filter, label, active, onChange }) {
  return (
    <label className="control control-radio" style={{ color: "#fff" }}>
      {label}
      <input type="radio" name={filter} checked={!!active} onChange={onChange} />
      <div className="control_indicator" />
    </label>
  );
}

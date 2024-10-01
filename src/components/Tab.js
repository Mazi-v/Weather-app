import React from "react";
import "./Tabs.css";

export default function Tab({ label, onSelect, isSelected }) {
  return (
    <div
      onClick={() => onSelect(label)}
      className={`tab-item ${isSelected ? "is-active" : ""}`}
    >
      {label}
    </div>
  );
}

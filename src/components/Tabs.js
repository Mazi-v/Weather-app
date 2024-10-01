import React, { useState } from "react";
import Tab from "./Tab";
import "./Tabs.css";
export default function Tabs({ options, onSelect, selectedOption }) {
  return (
    <div className="tabs-container">
      {Object.entries(options).map(([label, option]) => {
        return (
          <Tab
            key={`${option}${label}`}
            label={option}
            onSelect={onSelect}
            isSelected={selectedOption === option}
          ></Tab>
        );
      })}
    </div>
  );
}

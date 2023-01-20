import React from "react";

export default function Header(props) {
  return (
    <div className="dash__header">
      <div className="dash__header-title">{props.title}</div>
      <div className="dash__header-buttons">
        {props.children}
        <div
          className={`burger ${props.sidebar ? " active" : ""}`}
          onClick={() => props.setSidebar(!props.sidebar)}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}

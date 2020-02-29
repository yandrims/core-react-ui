import React from "react";

import "./style.scss";

interface IProps {
  theme: "primary" | "secondary";
  onClick();
}

const Button: React.FC<IProps> = ({ theme, children, onClick }) => (
  <button className={`button button-${theme}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;

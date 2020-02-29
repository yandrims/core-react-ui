import React from "react";

import "./style.scss";

interface IProps {
  theme: "primary" | "secondary";
}

const Text: React.FC<IProps> = ({ theme, children }) => (
  <p className={`text text-${theme}`}>{children}</p>
);

export default Text;

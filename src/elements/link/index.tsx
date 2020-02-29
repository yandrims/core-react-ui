import React from "react";

import "./style.scss";

interface IProps {
  theme: "primary" | "secondary";
  href: string;
}

const Link: React.FC<IProps> = ({ theme, children, href }) => (
  <a href={href} className={`link link-${theme}`}>
    {children}
  </a>
);

export default Link;

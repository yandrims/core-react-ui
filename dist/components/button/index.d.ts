import React from "react";
import "./style.scss";
interface IProps {
    theme: "primary" | "secondary";
    onClick(): any;
}
declare const Elm: React.FC<IProps>;
export default Elm;

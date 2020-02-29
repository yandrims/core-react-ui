import React from "react";
import Link from "./index";

export default {
  title: "Elements / Link"
};

export const Primary = () => (
  <Link href="https://google.com" theme="primary">
    Primary
  </Link>
);

export const Secondary = () => (
  <Link href="https://google.co.id" theme="secondary">
    Secondary
  </Link>
);

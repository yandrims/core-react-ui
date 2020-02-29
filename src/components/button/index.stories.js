import React from "react";
import Button from "./index";
import PropTypes from "prop-types";

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  /** button theme. */
  theme: PropTypes.string,
  /** onClick handler */
  onClick: PropTypes.func
};

export default {
  title: "Components / Button",
  parameters: {
    info: {
      inline: true,
      text: `
        description or documentation about my component, supports markdown
    
        ~~~jsx
        <Button>Click Here.......</Button>
        ~~~
      `
    }
  }
};

/** Button Primary */
export const Primary = () => (
  <Button theme="primary" value="test" onClick={() => console.log("hello")}>
    Primary
  </Button>
);

/** Button Secondary */
export const Secondary = () => <Button theme="secondary">Secondary</Button>;

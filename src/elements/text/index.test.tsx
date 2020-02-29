import React from "react";
import { shallow } from "enzyme";

import Text from "./index";

describe("Text", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<Text {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots as secondary themed", () => {
      props.theme = "secondary";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});

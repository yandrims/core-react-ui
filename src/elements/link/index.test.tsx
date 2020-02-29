import React from "react";
import { shallow } from "enzyme";

import Link from "./index";

describe("Link", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<Link {...props} />);

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

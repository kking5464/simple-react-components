import React from "react";
import { render } from "@testing-library/react";

import HeadingAndText from "./HeadingAndText";

describe("HeadingAndText", () => {
  test("renders the HeadingAndText component", () => {
    render(<HeadingAndText heading="Hello world!" headingColor="red" text="This is a paragraph" backgroundColor="white" />);
  });
});
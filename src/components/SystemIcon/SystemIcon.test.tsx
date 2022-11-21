import React from "react";
import { render } from "@testing-library/react";

import SystemIcon from "./SystemIcon";

describe("System Icon", () => {
  test("renders the SystemIcon component", () => {
    render(<SystemIcon name="error-filled" color="blue" />);
  });
});

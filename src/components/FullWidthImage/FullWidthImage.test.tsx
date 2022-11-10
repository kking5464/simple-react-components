import React from "react";
import { render } from "@testing-library/react";

import FullWidthImage from "./FullWidthImage";

describe("FullWidthImage", () => {
  test("renders the FullWidthImage component", () => {
    render(<FullWidthImage imageSource='https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' />);
  });
});
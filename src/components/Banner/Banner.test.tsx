import React from "react";
import { render } from "@testing-library/react";

import Banner from "./Banner";

describe("Banner", () => {
  test("renders the Banner component", () => {
    render(<Banner title="Label" subtitle="Description" />);
  });
});

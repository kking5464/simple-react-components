import React from "react";
import { render } from "@testing-library/react";

import SideNavigation from "./SideNavigation";

describe("SideNavigation", () => {
  test("renders the Navigation component", () => {
    render(<SideNavigation
        isOpen
        linkTitle=""
        linkUrl=""
      />);
  });
});
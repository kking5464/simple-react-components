import React from "react";
import { render } from "@testing-library/react";

import SideNavigationLink from "./SideNavigationLink";

describe("SideNavigationLink", () => {
  test("renders the Navigation component", () => {
    render(<SideNavigationLink isActive linkTitle="string" linkUrl="string"/>);
  });
});

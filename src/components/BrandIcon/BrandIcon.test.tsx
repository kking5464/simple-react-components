import React from "react";
import { render } from "@testing-library/react";

import BrandIcon from "./BrandIcon";

describe("Brand Icon", () => {
  test("renders the BrandIcon component", () => {
    render(<BrandIcon name="occasions_birthday-cake" color="secondaryBlue" />);
  });
});

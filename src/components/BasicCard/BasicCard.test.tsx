import React from "react";
import { render } from "@testing-library/react";

import BasicCard from "./BasicCard";

describe("BasicCard", () => {
  test("renders the BasicCard component", () => {
    render(
    <BasicCard
      title='Primary Title'
      subtitle='Sub-title'
      copy='Detailed text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      buttonLabel='Button Text'
      buttonType='primary'
    />);
  });
});
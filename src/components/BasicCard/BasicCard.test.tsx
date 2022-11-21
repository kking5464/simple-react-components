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
      imageURL='https://d1fd34dzzl09j.cloudfront.net/2022/07/Chicken%20Biscuit%20story/chicken%20biscuit%20image.png?h=973&w=1462&la=en'
      useButton={true}
      centerText={false}
    />);
  });
});
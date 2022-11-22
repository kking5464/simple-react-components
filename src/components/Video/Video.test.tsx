import React from "react";
import { render } from "@testing-library/react";

import Video from "./Video";

describe("Video", () => {
  test("renders the Video component", () => {
    render(<Video embedId='3YrPEOu8iBU' videoTitle='Test video' />);
  });
});
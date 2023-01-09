import React from "react";
import { render } from "@testing-library/react";

import BasicVideo from "./BasicVideo";

describe("Video", () => {
  test("renders the Video component", () => {
    render(<BasicVideo embedId='3YrPEOu8iBU' videoTitle='Test video' />);
  });
});
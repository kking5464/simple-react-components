import React from "react";
import { render } from "@testing-library/react";

import Navigation from "./Navigation";

describe("Navigation", () => {
  test("renders the Navigation component", () => {
    render(<Navigation
        logoImage='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_circle_frame_transparent.svg/512px-Red_circle_frame_transparent.svg.png'
        logoLink="/"
        profileImage='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      />);
  });
});
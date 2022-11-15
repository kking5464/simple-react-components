import React from "react";
import { render } from "@testing-library/react";

import Event from "./Event";

describe("Event", () => {
  test("renders the Event component", () => {
    render(<Event eventName="name" description="Description" />);
  });
});

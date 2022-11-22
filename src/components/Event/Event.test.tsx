import React from "react";
import { render } from "@testing-library/react";

import Event from "./Event";

describe("Event Icon", () => {
  test("renders the Event component", () => {
    render(<Event title="name" date="date" />);
  });
});
describe("Event Preview", () => {
  test("renders the Event component", () => {
    render(<Event title="title" date="date" image="test" />);
  });
});
describe("Event Card", () => {
  test("renders the Event component", () => {
    render(
      <Event
        eventType="card"
        title="title"
        date="Tuesday, November the 15th"
        basicCardDescription="In the back office at 10:00 AM"
        image="https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      />
    );
  });
});

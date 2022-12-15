import React from "react";
import { render } from "@testing-library/react";

import Event from "./Event";

describe("Event Card", () => {
  test("renders the Event component", () => {
    render(
      <Event
        eventType="card"
        eventTitle="title"
        date="Tuesday, November the 15th"
        startTime="9:00 AM"
        endTime="11:00 AM"
        buttonUrlLink="google.com"
        eventImage="https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      />
    );
  });
});

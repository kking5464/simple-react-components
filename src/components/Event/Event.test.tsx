import React from "react";
import { render } from "@testing-library/react";

import Event from "./Event";

describe("Event Banner", () => {
  test("renders the Event component", () => {
    render(<Event eventName="name" description="Description" />);
  });
});
describe("Event Preview", () => {
  test("renders the Event component", () => {
    render(
      <Event eventType="preview" eventName="name" description="Description" />
    );
  });
});
describe("Event Card", () => {
  test("renders the Event component", () => {
    render(
      <Event
        eventType="card"
        bc_titleColor="gray"
        bc_subtitle="Tuesday, November the 15th"
        bc_copy="In the back office at 10:00 AM"
        bc_buttonLabel="Button Text"
        bc_buttonType="secondary"
        bc_buttonUrl="https://www.google.com"
        bc_buttonColor="red"
        bc_useButton={true}
        bc_centerText={false}
        bc_smallTitles={false}
        bc_imageURL="https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      />
    );
  });
});

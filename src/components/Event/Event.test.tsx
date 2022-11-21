import React from "react";
import { render } from "@testing-library/react";

import Event from "./Event";

describe("Event Banner", () => {
  test("renders the Event component", () => {
    render(<Event eventName="name" iconEventDescription="Description" />);
  });
});
describe("Event Preview", () => {
  test("renders the Event component", () => {
    render(
      <Event
        eventType="preview"
        eventName="name"
        previewDescription="Description"
      />
    );
  });
});
describe("Event Card", () => {
  test("renders the Event component", () => {
    render(
      <Event
        eventType="card"
        basicCardTitle="title"
        basicCardTitleColor="gray"
        basicCardSubtitle="Tuesday, November the 15th"
        basicCardCopy="In the back office at 10:00 AM"
        basicCardButtonLabel="Button Text"
        basicCardButtonType="secondary"
        basicCardButtonUrl="https://www.google.com"
        basicCardButtonColor="red"
        basicCardUseButton={true}
        basicCardCenterText={false}
        basicCardSmallTitles={false}
        basicCardImageURL="https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      />
    );
  });
});

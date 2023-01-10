import React from "react";
import { render } from "@testing-library/react";

import BasicVideo from "./BasicVideo";

describe("BasicVideo", () => {
  test("renders the BasicVideo component", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls='1'
                       autoplay='1'
                       ccLanguagePreference='en'
                       ccLoad='0'/>);
  });
});
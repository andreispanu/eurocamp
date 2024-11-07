
import React from "react";
import Dashboard from './Dashboard';
import { mount} from '@cypress/react18';
import { BrowserRouter } from "react-router-dom";

describe("Navigation bar", () => {
  it("renders", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });
})

import React from "react";
import ReusableButton from "./ReusableButton";
import { mount } from "@cypress/react18";
import { BrowserRouter } from "react-router-dom";

describe("ReusableButton component", () => {
  it("renders", () => {
    mount(
      <BrowserRouter>
        <ReusableButton label="Create User" action={() => {}} />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-button]").should("exist");
  });

  it("calls the action when clicked", () => {
    const action = cy.stub().as("action");

    mount(
      <BrowserRouter>
        <ReusableButton label="Create User" action={action} />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-button]").click();
    cy.get("@action").should("have.been.called");
  });

  it("has a label matching the props", () => {
    mount(
      <BrowserRouter>
        <ReusableButton label="Create User" action={() => {}} />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-button]").should("have.text", "Create User");
  });
});

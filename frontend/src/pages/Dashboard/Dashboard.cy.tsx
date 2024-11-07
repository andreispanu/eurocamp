import React from "react";
import Dashboard from "./Dashboard";
import { mount } from "@cypress/react18";
import { BrowserRouter } from "react-router-dom";

describe("Dashboard page", () => {
  it("renders", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    cy.get("[data-testid=dashboard-container]").should("exist");
  });

  it("has three links", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-card]").should("have.length", 3);
  });

  it("navigates to /users", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-card]").first().click();
    cy.url().should("include", "/users");
  });

  it("navigates to /parcs", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-card]").eq(1).click();
    cy.url().should("include", "/parcs");
  });

  it("navigates to /bookings", () => {
    mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    cy.get("[data-testid=reusable-card]").last().click();
    cy.url().should("include", "/bookings");
  });
});

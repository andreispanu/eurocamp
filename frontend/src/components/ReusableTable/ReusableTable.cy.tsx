import React from "react";
import ReusableTable from "./ReusableTable";
import { mount } from "@cypress/react18";
import { BrowserRouter } from "react-router-dom";

describe("ReusableTable component", () => {
    it("renders", () => {
      mount(
        <BrowserRouter>
          <ReusableTable data={[]} columns={{ headers: [""], cells: [""] }} />
        </BrowserRouter>
      );
  
      cy.get("[data-testid=reusable-table]").should("exist");
    });

    it("renders with data", () => {
      const data = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Doe" },
      ];
  
      mount(
        <BrowserRouter>
          <ReusableTable
            data={data}
            columns={{ headers: ["ID", "Name"], cells: ["id", "name"] }}
          />
        </BrowserRouter>
      );
  
      cy.get("[data-testid=reusable-table]").should("exist");
      cy.get("tbody").children().should("have.length", 2);
    });

});


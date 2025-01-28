/// <reference types="cypress" />

import { describe } from "mocha";
import { it } from "mocha";
import { cy } from "cypress";

describe("Admin Dashboard", () => {
    it("should load the homepage", () => {
      cy.visit("/");
      cy.contains("Admin Panel").should("exist");
    });
  
    it("should navigate to the users page", () => {
      cy.visit("/");
      cy.contains("Users").click();
      cy.url().should("include", "/users");
      cy.contains("Users").should("exist");
    });
  });
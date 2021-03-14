// https://docs.cypress.io/api/introduction/api.html

describe("App.vue", () => {
  it("contains <h1>Dist Sys Client Vue</h1> when app root url is visited", () => {
    cy.visit("/");
    cy.contains("h1", "Dist Sys Client Vue");
  });
});

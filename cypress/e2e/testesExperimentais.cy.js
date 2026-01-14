describe("TestandoRecursos", () => {
  it("tests TestandoRecursos", () => {
    cy.viewport(1278, 911);
    cy.visit("http://gtapp-env-test-env.eba-ptnveqnp.sa-east-1.elasticbeanstalk.com/");
    cy.get("div.false button").click();
    cy.get("#email").click();
    cy.get("#email").type("filipemitre@opensolucoestributarias.com.br");
    cy.get("#password").click();
    cy.get("#password").type("Open@2025");
    cy.get("div.MuiDialog-root button").click();
    cy.location("href").should("eq", "http://gtapp-env-test-env.eba-ptnveqnp.sa-east-1.elasticbeanstalk.com/cliente");
    cy.get("div.MuiGrid2-root > div:nth-of-type(2) h3").click();
    cy.get("#root a:nth-of-type(11) > p").click();
    cy.get("body").click();
    cy.get(".css-je64ze").click();
    cy.get("div.css-19midj6 button").click();
  });
});


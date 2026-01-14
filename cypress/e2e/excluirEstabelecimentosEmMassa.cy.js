describe("Automatizar exclusão de estabelecimentos", () => {
  it("tests Automatizar exclusão de estabelecimentos", () => {
    cy.viewport(1148, 695);
    cy.visit("http://gtapp-env-test-env.eba-ptnveqnp.sa-east-1.elasticbeanstalk.com/");
    cy.get("div.false button").click();
    cy.get("#email").click();
    cy.get("#email").type("filipemitre@opensolucoestributarias.com.br");
    cy.get("#password").click();
    cy.get("#password").type("Open@2025");
    cy.get("div.MuiDialog-root button").click();
    cy.location("href").should("eq", "http://gtapp-env-test-env.eba-ptnveqnp.sa-east-1.elasticbeanstalk.com/cliente");
    cy.get("div.MuiGrid2-root > div:nth-of-type(2) > div > div").click();
    cy.get("#root a:nth-of-type(2) > p").click();

    //eliminar
    cy.get("tr:nth-of-type(1) div > button path").click();
    cy.get("button.MuiButton-outlinedPrimary > div > span").click();
  });
});

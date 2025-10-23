/// <reference types="cypress" />

it('Acessar ambiente de teste', () => {
    cy.visit('http://gtapp-env-test-env.eba-ptnveqnp.sa-east-1.elasticbeanstalk.com/')
    cy.get('#root button.css-2p18ax').click();
    cy.get('#email').click();
    cy.get('#email').type('filipemitre@opensolucoestributarias.com.br');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Open@2025');
    cy.get('button.css-m26xji').click();
    cy.get('#root div.css-10dp7zp div.css-6g0m70').click();
    cy.get('#root a[href="/reinf/painel-doc-fiscais"] p.css-2jym8l').click();
    cy.get('#root div.css-1dhfk0n button.css-15xtinm').click();
    cy.get('input[value="SHEET4010"]').check();
    cy.get('span.css-1s0jv2i').click();
    cy.get('input[type="file"]').selectFile('cypress/fixtures/PlanilhaGTReinf_4010_instrucoes.xlsx', { force: true });
    cy.wait(5000)
    cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
    // cy.get('button.modern-button').click();
    cy.get('button.css-7rkrju').click();
    cy.get('#root a[href="/reinf/eventos-efd-reinf"] div.css-tuj5z2').click();
    cy.get('body').click();
    cy.get('#li[data-value="r4010"]').click();
    cy.get('#root button.css-1s0jv2i').click();
    cy.get('#root tr:nth-child(5) input.PrivateSwitchBase-input').check();
    cy.get('#root button.css-9bapmv').click();
    cy.get('#\\:r2d\\:').should('have.value', 'Produção Restrita');
    cy.get('button.css-1nzyf1').click();
    cy.get('div:nth-child(1) > p.css-1js4alq').click();
    cy.get('div:nth-child(1) > p.css-1js4alq').should('have.text', '1 - O lote ainda está em processamento pela EFD-REINF');
    cy.get('button.css-1wqh2ts').click();
    cy.get('#root div:nth-child(3) > button.css-19h6i96').click();
    cy.get('#root span.css-etb5w4 button.css-1s0jv2i').click();
    cy.get('button.css-1wqh2ts').click();
    cy.get('body').click();
    cy.get('#\\:r1s\\: li[data-value="r4099"]').click();
    cy.get('#root button.css-1s0jv2i').click();
    cy.get('#\\:r3n\\:').should('have.value', 'Produção Restrita');
    cy.get('button.css-1nzyf1').click();
    cy.get('button.css-1wqh2ts').click();
    cy.get('body').click();
    cy.get('#\\:r1s\\: li[data-value="r4010"]').click();
    cy.get('#root button.css-1s0jv2i').click();
    cy.get('#root h3').click();
    cy.get('#root h3').click();
    cy.get('#root h3').should('have.text', 'Período 09/2025 está fechado.');
    cy.get('body').click();
    cy.get('#\\:r1s\\: li[data-value="r4099"]').click();
    cy.get('#root button.css-1s0jv2i').click();
    cy.get('div.css-19bb58m').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#\\:r4c\\:').should('have.value', 'Produção Restrita');
    cy.get('button.css-1nzyf1').click();
    cy.get('button.css-1wqh2ts').click();
    cy.get('body').click();
    cy.get('#\\:r1s\\: li[data-value="r4010"]').click();
    cy.get('#root button.css-1s0jv2i').click();
})
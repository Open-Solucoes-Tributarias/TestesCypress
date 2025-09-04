
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @memberof cy
 * @name handleChatPopup
 * @summary Verifica se o popup do chat está visível e o fecha.
 * @description Este comando verifica a existência do iframe do chat. Se o encontrar,
 * entra no iframe e clica em um elemento para fechá-lo. Se não o encontrar,
 * simplesmente continua o teste sem erros.
 * @example
 * cy.handleChatPopup();
 * cy.get('button#submit').click();
*/
Cypress.Commands.add('handleChatPopup', () => {
  cy.log('Verificando se o popup do chat está aberto...');

  cy.get('body', { log: false }).then($body => {
    const $iframe = $body.find('iframe[title="chat widget"]');

    if ($iframe.length > 0 && $iframe.is(':visible')) {
      // Verifica se o chat está aberto checando a largura do iframe.
      // Se for maior que 100px, consideramos que está aberto e precisa ser fechado.
      if ($iframe.width() > 100) {
        cy.log('Popup do chat está aberto. Tentando fechar...');

        // Entra no iframe e clica no botão para fechar.
        cy.get('iframe[title="chat widget"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .within(() => {
            const chatIconButtonSelector = 'button:has(svg[alt="Ícone do chat"])';
            cy.get(chatIconButtonSelector, { log: false })
              .should('be.visible')
              .click({ force: true });
          });

        // LÓGICA MELHORADA: Em vez de um tempo fixo, espera ATÉ que o iframe
        // tenha encolhido. Isso garante que o popup realmente fechou.
        cy.log('Aguardando o popup do chat fechar...');
        cy.get('iframe[title="chat widget"]').should($el => {
          // Esta verificação será repetida até passar ou o tempo esgotar.
          expect($el.width()).to.be.lessThan(100);
        });
        cy.log('Popup do chat fechado com sucesso.');

      } else {
        cy.log('Popup do chat já está minimizado.');
      }
    } else {
      cy.log('Popup do chat não foi encontrado na página.');
    }
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

export class EnvioEControle {
    acessar() {
        cy.get('.css-1u1l0hr > .MuiStack-root > :nth-child(1)').click()
    }
    verificarCampos() {
        cy.get('.css-1bsltwy').should('contain.text', 'Assunto *')
        cy.get('.css-1bsltwy').should('contain.text', 'Mensagem *')
        cy.get('.css-1bsltwy').should('contain.text', 'Upload de arquivos')
        cy.get('.css-1bsltwy').should('contain.text', 'Enviar')

        cy.get('.css-15gjl70').should('contain.text', 'Controle de IFs')
        cy.get('.css-15gjl70').should('contain.text', 'Data Inicial')
        cy.get('.css-15gjl70').should('contain.text', 'Data Final')
        cy.get('.css-15gjl70').should('contain.text', 'Aplicar')

        cy.get('.css-16v4ypd').should('contain.text', 'EXPORTAR')
    }
}
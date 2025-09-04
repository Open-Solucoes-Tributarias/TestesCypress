export class MeusDados {
    acessar() {
        cy.get('.css-5cafqy > :nth-child(3)').click()
    }

    verificarCampos() {
        cy.get('.css-c3vlm2').should('contain.text', 'Minha Empresa')
        cy.get('.css-c3vlm2').should('contain.text', 'Categoria')
        cy.get('.css-c3vlm2').should('contain.text', 'Plano')
        cy.get('.css-c3vlm2').should('contain.text', 'CNPJ')
        cy.get('.css-c3vlm2').should('contain.text', 'Nome')
        cy.get('.css-c3vlm2').should('contain.text', 'Endereço')
        cy.get('.css-c3vlm2').should('contain.text', 'Complemento')
        cy.get('.css-c3vlm2').should('contain.text', 'CEP')
        cy.get('.css-c3vlm2').should('contain.text', 'Cidade')
        cy.get('.css-c3vlm2').should('contain.text', 'Estado')
        cy.get('.css-c3vlm2').should('contain.text', 'Telefone')
        cy.get('.css-c3vlm2').should('contain.text', 'Celular')
        cy.get('.css-c3vlm2').should('contain.text', 'E-mail')
        cy.get('.css-c3vlm2').should('contain.text', 'Editar minhas Informações')
        cy.get('.css-c3vlm2').should('contain.text', 'Nome')
        cy.get('.css-c3vlm2').should('contain.text', 'Email')
        cy.get('.css-c3vlm2').should('contain.text', 'Telefone')
        cy.get('.css-c3vlm2').should('contain.text', 'Celular')
        cy.get('.css-c3vlm2').should('contain.text', 'Nova senha')
        cy.get('.css-c3vlm2').should('contain.text', 'Confirmar Senha')
        cy.get('.css-c3vlm2').should('contain.text', 'Cancelar')
        cy.get('.css-c3vlm2').should('contain.text', 'Salvar')
    }
}
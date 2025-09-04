export class Admin {
    acessar(){
        cy.get('.css-py3s6i > :nth-child(6)').trigger('mouseover')
        cy.get('a[href="/admin"]').click({force: true})
    }
}
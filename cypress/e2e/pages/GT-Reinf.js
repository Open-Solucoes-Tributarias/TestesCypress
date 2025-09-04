export class GTReinf{
    acessar(){
        cy.wait(5000)
        cy.contains('Envio da EFD-Reinf de forma simplificada com a segurança que você precisa.').click({force: true})
    }
}
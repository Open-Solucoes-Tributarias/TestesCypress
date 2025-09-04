export class Cadastro{
    
    clicarCadastro(){
        cy.contains('p', 'Cadastro').click();
    }
}
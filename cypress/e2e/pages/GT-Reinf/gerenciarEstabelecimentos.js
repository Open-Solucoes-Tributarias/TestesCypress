export class GerenciarEstabelecimentos {
    acessar(){
        cy.wait(2000)
        cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/gerenciar-estabelecimentos"]').trigger('mouseover', { force: true }).click({force: true})
    }

    verificarCampos(){

    }

    clicarSelecionarUsuario(){
        cy.get('.css-19bb58m').click()
    }

    escolherUsuario(opcao){
        cy.get(`#react-select-2-option-${opcao}`).click()
    }

    selecionarEstabelecimento(){
        cy.get('.PrivateSwitchBase-input').check()
    }

    desmarcarEstabelecimento(){
        cy.get('.PrivateSwitchBase-input').uncheck()
    }

    alternarSelecionarDesmarcarTodos(){
        cy.get('.css-j5005a > .MuiButtonBase-root').click()
    }

}
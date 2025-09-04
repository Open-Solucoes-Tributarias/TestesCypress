export class Login {

    fillUsername(username) {
        cy.get('#email').type(username)
    }
    fillPassword(password) {
        cy.get('#password').type(password)

    }
    clickLogin() {
        cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    }

    fazerLoginCompleto(username, password) {
        cy.window().then((win) => {
            if (win.innerWidth > 1080) {
                cy.get('.css-py3s6i > .MuiButtonBase-root').click()
            } else {
                cy.get('.css-70qvj9 > .MuiButtonBase-root').click()
                cy.get('.MuiList-root > .MuiButtonBase-root').click()
            }
        });

        this.fillUsername(username)
        this.fillPassword(password)
        this.clickLogin()
    }

    verificarLoginIncorreto(){
        cy.get('.css-y5423l').should('contain.text', 'Usuário ou senha inválidos.')
    }

    clicarEsqueciSenha(){
        cy.get('#forgotPass').click({force: true})
    }

    clicarVoltarParaLogin(){
        cy.get('.css-1q1t0cn').click({force: true})
    }

    clicarRecuperarSenha(){
        cy.get('.css-jtlkn3 > .MuiBox-root > .MuiButtonBase-root').click({force: true})
        // cy.get('[data-layer="Content"]').should('contain.text', 'Criamos uma nova senha e enviamos para seu email')
    }
}
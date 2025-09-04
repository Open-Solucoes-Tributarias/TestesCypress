export class VisualizarInformacoes {
    acessar() {
        cy.get('.css-5cafqy > :nth-child(4)').click()
    }
    verificarCampos() {
        cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get('.css-1fz7c68 > .MuiButtonBase-root').click()
    }
}
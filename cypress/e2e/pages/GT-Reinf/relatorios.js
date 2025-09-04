export class Relatorios {
    acessar() {
        cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/relatorios"]').trigger('mouseover', { force: true }).click({force: true})
    }

    selecionarRetecaoIR(opcao){
        // De 2 a 9
        cy.get(`:nth-child(2) > :nth-child(${opcao}) > .MuiButtonBase-root > .PrivateSwitchBase-input`).check()
    }

    selecionarRetencaoINSS(opcao){
        // De 2 a 5
        cy.get(`:nth-child(3) > :nth-child(${opcao}) > .MuiButtonBase-root > .PrivateSwitchBase-input`).check()
    }

    selecionarOutros(){
        cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check()
    }

    escolherExcel(){
        cy.get('.MuiGrid2-grid-sm-4 > :nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').check()
    }

    escolherPDF(){
        cy.get('.MuiGrid2-grid-sm-4 > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').check()
    }

    gerarRelatorio(){
        cy.get('.css-gmuwbf > .MuiButtonBase-root').click()
    }
}
export class Downloads {
    acessar() {
        cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/downloads"]').trigger('mouseover', { force: true }).click({force: true})
    }
    escolherModeloPlanilha() {
        cy.get('.MuiSelect-select').click()
    }

    selecionarR2010(){
        cy.get('li[data-value="1"]').click()
    }

    selecionarR4020(){
        cy.get('li[data-value="2"]').click()
    }

    selecionarR4010(){
        cy.get('li[data-value="3"]').click()
    }

    baixar(){
        cy.get('.MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
    }

    alternarPlanilhasConversor(){
        cy.get('.MuiTabs-list > [tabindex="-1"]').click()
    }

    instalarGTConvert(){
        cy.get('.css-19midj6 > .MuiStack-root > .MuiButtonBase-root').click()
    }

}
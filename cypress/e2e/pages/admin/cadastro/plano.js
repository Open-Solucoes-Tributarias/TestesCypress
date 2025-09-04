export class Plano{
    acessar(){
        cy.get('a[href="/admin/plano"]').click()
    }

    criarPlano(){
        cy.get('.css-axw7ok > .MuiBox-root > .MuiButtonBase-root').click()
    }

    pesquisarPlano(){
        cy.get('.css-1wu5yjv > .MuiInputBase-root > .MuiInputBase-input').click()
    }

    clicarEliminarPlano(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(4) > .MuiBox-root > [aria-label="Eliminar"] > [data-testid="DeleteOutlineIcon"]`).click()
    }

    confirmarEliminarPlano(){
        cy.get('.MuiButton-outlinedPrimary').click()
    }

    negarEliminarPlano(){
        cy.get('.MuiButton-outlined\\#000').click()
    }

    clicarEditarPlano(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(5) > .MuiBox-root > span > .MuiButtonBase-root > [data-testid="EditIcon"]`).click()
    }

    limparCampos(){
        cy.get('input[placeholder="Nome"]').clear({force: true})
        cy.get('input[placeholder="Número de Usuários"]').clear({force: true})
        cy.get('.MuiBox-root > input').clear({force: true})
        cy.get('input[placeholder="Limite de consultas"]').clear({force: true})
        cy.get('input[placeholder="N° de informações fiscais"]').clear({force: true})
    }

    preencherPlano(nome, numeroUsuarios, preco, limiteConsultas, infoFiscais){
        cy.get('input[placeholder="Nome"]').type(nome)
        cy.get('input[placeholder="Número de Usuários"]').type(numeroUsuarios)
        cy.get('.MuiBox-root > input').type(preco)
        cy.get('input[placeholder="Limite de consultas"]').type(limiteConsultas)
        cy.get('input[placeholder="N° de informações fiscais"]').type(infoFiscais)
    }

    clicarChecks(opcao){
        cy.get(`:nth-child(${opcao}) > .MuiFormControlLabel-root`).click()
    }
    
    salvarEditado(){
        cy.get('.css-1fz7c68 > .MuiButtonBase-root').click()
    }
    
    voltarEdicao(){
        cy.get('.css-15wjcgz > .MuiButtonBase-root').click()
    }
}
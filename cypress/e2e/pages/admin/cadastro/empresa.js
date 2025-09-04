export class Empresa {
    clicarEmpresa(){
        cy.get('a[href="/admin/empresa"]').click()
    }

    criarEmpresa(){
        cy.get('.css-axw7ok > .MuiBox-root').click()
    }

    preencherCNPJ(CNPJ){
        cy.get('.css-y1qzc2 > .MuiBox-root > input').click().type(CNPJ)
    }
    buscarCNPJPreencher(){
        cy.get('.css-1nhneps > .MuiButtonBase-root').click()
    }
    selecionarCategoria(opcao){
        cy.get(':nth-child(4) > .css-3a3hw0 > .css-axw7ok > .css-8atqhb > .css-b62m3t-container > .css-1wqz8ct > .css-hlgwow > .css-19bb58m').click()
        cy.get(`#react-select-3-option-${opcao}`).click()
    }
    selecionarCidade(opcao){
        cy.get(':nth-child(8) > .css-3a3hw0 > .css-axw7ok > .MuiBox-root > .css-b62m3t-container > .css-1wqz8ct > .css-hlgwow > .css-19bb58m').click()
        cy.get(`#react-select-5-option-${opcao}`).click()
    }
    preencherCelular(celular){
        cy.get(':nth-child(12) > .MuiBox-root > input').type(celular)
    }
    selecionarPlano(opcao){
        cy.get(':nth-child(14) > .css-3a3hw0 > .css-axw7ok > .css-8atqhb > .css-b62m3t-container > .css-1wqz8ct > .css-hlgwow > .css-19bb58m').click()
        cy.get(`#react-select-6-option-${opcao}`).click()
    }
    salvarEmpresa(){
        cy.get('.css-1fz7c68 > .MuiButtonBase-root').click()
    }

    clicarEliminarEmpresa(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(7) > .MuiBox-root > [aria-label="Eliminar"]`).click()
    }

    confirmarEliminarEmpresa(){
        cy.get('.MuiButton-outlinedPrimary').click()
    }

    negarEliminarEmpresa(){
        cy.get('.MuiButton-outlined\\#000').click()
    }

    editarEmpresa(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(8) > .MuiBox-root > [aria-label="Editar"]`).click()
    }

    editarEmpresaVoltar(){
        cy.get('.css-0 > :nth-child(1) > .MuiButtonBase-root').click()
    }
}
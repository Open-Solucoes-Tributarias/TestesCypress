export class CategoriaEmpresa {
    acessar(){
        cy.get('a[href="/admin/empresa/categoria"]').click()
    }

    selecionarCategoria(opcao){
        cy.get(`:nth-child(${opcao}) > .css-6sqjke > [aria-label=""] > .MuiButtonBase-root > .PrivateSwitchBase-input`).check()
    }

    desselecionarCategoria(opcao){
        cy.get(`:nth-child(${opcao}) > .css-6sqjke > [aria-label=""] > .MuiButtonBase-root > .PrivateSwitchBase-input`).uncheck()
    }
}
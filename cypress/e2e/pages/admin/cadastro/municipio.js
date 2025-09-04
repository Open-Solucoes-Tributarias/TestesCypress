export class Municipio {
    acessar() {
        cy.get('a[href="/admin/consulta-iss/atualizar-municipios"]').click()
    }

    clicarSelecionar(){
        cy.get('.css-19bb58m').click()
    }

    selecionarMunicipio(opcao){
        cy.get(`#react-select-2-option-${opcao}`).click()
    }
}
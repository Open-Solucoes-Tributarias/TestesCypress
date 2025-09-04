export class ParceirosDeNegocio {
    acessar(){
        cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/parceiros-negocio"]').trigger('mouseover', { force: true }).click({force: true})
        cy.wait(4000)
    }

    editarParceirosDeNegocio(){
        this.clicarEditar(1)
        this.verificarCamposEditar()
        this.cadastrarParceiro()
    }

    clicarEditar(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(6) > .MuiBox-root > [aria-label="Editar"] > .MuiButtonBase-root`).click()
    }

    verificarCamposEditar(){
        cy.get('.css-m10j2j').should('contain.text', 'Tipo de contratado')
        cy.get('.css-m10j2j').should('contain.text', 'CNPJ do Contratado')
        cy.get('.css-m10j2j').should('contain.text', 'Tipo de Serviço')
        cy.get('.css-m10j2j').should('contain.text', 'Nome Empresarial')
        cy.get('.css-m10j2j').should('contain.text', 'Nome Fantasia')
        cy.get('.css-m10j2j').should('contain.text', 'Endereço')
        cy.get('.css-m10j2j').should('contain.text', 'Número')
        cy.get('.css-m10j2j').should('contain.text', 'Inscrição Estadual')
        cy.get('.css-m10j2j').should('contain.text', 'Inscrição Municipal')
        cy.get('.css-m10j2j').should('contain.text', 'Cidade/UF')
        cy.get('.css-m10j2j').should('contain.text', 'CEP')
        cy.get('.css-m10j2j').should('contain.text', 'Telefone')
        cy.get('.css-m10j2j').should('contain.text', 'Email')
    }

    cadastrarParceiro(){
        cy.get('.css-ejvoe1 > .MuiButtonBase-root').click()
        cy.get('.MuiGrid2-grid-sm-4 > .css-3a3hw0 > :nth-child(2) > .css-1o2srd0 > .css-b62m3t-container > .css-131wdpg > .css-hlgwow > .css-19bb58m').click()
        cy.get('.MuiGrid2-grid-sm-8 > .css-3a3hw0 > input').clear().type('99999999999999')
        cy.get('.css-j5005a > .css-3a3hw0 > :nth-child(2) > .css-1o2srd0 > .css-b62m3t-container > .css-kfd54g > .css-hlgwow > .css-19bb58m').click()
        cy.get('.css-j5005a > .css-3a3hw0 > :nth-child(2) > .css-1o2srd0 > .css-b62m3t-container > .css-kfd54g > .css-hlgwow > .css-19bb58m').click()
        cy.get('input[placeholder="Nome Empresarial"]').clear().type('Empresa Teste')
        cy.get('input[placeholder="Nome Fantasia"]').type('Empresa Teste')
        cy.get('input[placeholder="Endereço"]').clear().type('Rua Teste')
        cy.get('input[placeholder="Número"]').clear().type('123')
        cy.get('input[placeholder="Inscrição Estadual"]').type('123456789')
        cy.get('input[placeholder="Inscrição Municipal"]').type('123456789')
        cy.get('.MuiGrid2-grid-md-8 > .css-3a3hw0 > :nth-child(2) > .css-1o2srd0 > .css-b62m3t-container > .css-131wdpg > .css-hlgwow > .css-19bb58m').click()
        cy.get('.MuiGrid2-grid-md-8 > .css-3a3hw0 > :nth-child(2) > .css-1o2srd0 > .css-b62m3t-container > .css-131wdpg > .css-hlgwow > .css-19bb58m').click()
        cy.get('.MuiGrid2-grid-md-4 > .MuiBox-root > input').clear().type('30000000')
        cy.get(':nth-child(13) > .MuiBox-root > input').clear().type('71987654321')
        cy.get('input[placeholder="Email"]').clear().type('teste@teste.com.br')
    }

    clicarSalvar(){
        cy.get('.MuiButton-contained').click({force: true})
    }

    clicarCancelar(){
        cy.get('.MuiButton-outlined').click({force: true})
    }
}
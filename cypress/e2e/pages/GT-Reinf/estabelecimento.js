export class Estabelecimento {
    acessar(){
        // cy.get('.MuiIconButton-colorInherit').click()
        cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/estabelecimentos-r1000"]').trigger('mouseover', { force: true }).click({force: true})
    }

    verificarCampos(){
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'CNPJ')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Estabelecimento')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Cód. Unidade Gestora')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Natureza Jurídica')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Endereço')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Complemento')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'CEP')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Responsável pelas Informações')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'CPF do Responsável')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'E-mail')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Telefone')
        cy.get('.css-so43pz > .MuiGrid2-container').should('contain.text', 'Celular')
    }

    incluirEstabelecimento(){
        this.clicarIncluirEstabelecimento()
        this.verificarCamposIncluirEstabelecimento()
        this.preencherCamposIncluirEstabelecimento('99999999999999', 'Estabelecimento Teste', '123456')
        this.limparCamposIncluirEstabelecimento()
        this.fecharIncluirEstabelecimento()
    }

    clicarIncluirEstabelecimento(){
        cy.get('.MuiGrid2-root > .MuiBox-root > .MuiButtonBase-root').click()
    }

    verificarCamposIncluirEstabelecimento(){
        cy.get('.css-yhyivz').should('contain.text', 'CNO/CNPJ')
        cy.get('.css-yhyivz').should('contain.text', 'Nome')
        cy.get('.css-yhyivz').should('contain.text', 'Código da Unidade Gestora')
    }

    preencherCamposIncluirEstabelecimento(CNOCNPJ, nome, codigoUG){
        cy.get(':nth-child(1) > .MuiBox-root > input').type(CNOCNPJ)
        cy.get('input[placeholder="Nome do Estabelecimento"]').type(nome)
        cy.get('input[placeholder="Código UG"]').type(codigoUG)
    }

    limparCamposIncluirEstabelecimento(){
        cy.get(':nth-child(1) > .MuiBox-root > input').clear()
        cy.get('input[placeholder="Nome do Estabelecimento"]').clear()
        cy.get('input[placeholder="Código UG"]').clear()
    }

    salvarIncluirEstabelecimento(){
        cy.get('.MuiGrid2-grid-sm-4 > .MuiButtonBase-root').click()
    }

    fecharIncluirEstabelecimento(){
        cy.get('.MuiGrid2-grid-sm-3 > .MuiButtonBase-root').click()
    }

    editarEstabelecimento(){
        this.clicarEditarEstabelecimento(1)
        this.fecharEditarEstabelecimento()
    }

    clicarEditarEstabelecimento(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(4) > .MuiBox-root > [aria-label="Editar"] > .MuiButtonBase-root > [data-testid="EditIcon"]`).click({force: true})
    }

    fecharEditarEstabelecimento(){
        cy.get('.MuiGrid2-grid-sm-3 > .MuiButtonBase-root').click()
    }

    atualizarEditarEstabelecimento(){
        cy.get('.MuiGrid2-grid-sm-4 > .MuiButtonBase-root').click()
    }

    clicarEliminarEstabelecimento(opcao){
        cy.get(`:nth-child(${opcao}) > :nth-child(4) > .MuiBox-root > [aria-label="Eliminar"] > [data-testid="DeleteOutlineIcon"]`).click({force: true})
    }

    aceitarEliminarEstabelecimento(){
        cy.get('.MuiButton-outlinedPrimary').click()
    }

    negarEliminarEstabelecimento(){
        cy.get('.MuiButton-outlined\\#000').click()
    }

    alternarR1000(){
        cy.get('.MuiButton-outlined').click()
    }

    alternarInformaçõesEmpresa(){
        cy.get('.MuiButton-outlined').click()
    }

    // Resolver funcionalidades
    cadastrarNovoR1000(){
        cy.get('.MuiGrid2-root > .MuiBox-root > .MuiButtonBase-root').click()
    }

    // cadastroData(data){
    //     cy.get('input[placeholder="MM/AAAA"]').type(data)
    // }
    // cadastroFimValidade(data){
    //     cy.get('input[placeholder="MM/AAAA"]').type(data)
    // }

    clicarEditarR1000(){
        cy.get('svg[data-testid="EditIcon"]').click({force: true})
    }

    clicarEfetuarEnviosR1000(){
        cy.get('svg[data-testid="UploadFileOutlinedIcon"]').click({force: true})
    }

    clicarEliminarR1000(){
        cy.get('svg[data-testid="DeleteOutlineIcon"]').click({force: true})
    }

    pesquisarR1000(pesquisa){
        cy.get(':nth-child(4) > .MuiPaper-root > .css-16v4ypd > .css-1cxa48e > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(4) > .MuiPaper-root > .css-16v4ypd > .css-1cxa48e > .MuiInputBase-root > .MuiInputBase-input').type(pesquisa)
    }

    pesquisarR1000Enviados(pesquisa){
        cy.get(':nth-child(6) > .MuiPaper-root > .css-16v4ypd > .css-1cxa48e > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(6) > .MuiPaper-root > .css-16v4ypd > .css-1cxa48e > .MuiInputBase-root > .MuiInputBase-input').type(pesquisa)
    }


}


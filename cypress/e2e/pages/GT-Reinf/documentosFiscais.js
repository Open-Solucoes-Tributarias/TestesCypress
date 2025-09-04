export class DocumentosFiscais {
    acessar(){
        cy.get('a[href="/reinf/painel-doc-fiscais"]').first().click()
    }
    
    clicarImportarArquivos(){
        cy.get('.css-1dhfk0n > .MuiButtonBase-root').click()
    }

    // NFS-e/NF-e(xml) => 1
    // Documento SIAFI => 2
    // Planilha Padrão => 3
    // Planilha R-4010 => 4
    escolherTipoArquivo(opcao){
        cy.get(`.MuiFormGroup-root > :nth-child(${opcao}) > .MuiTypography-root`).click()
    }

    fecharAbaImportacao(){
        cy.contains('Fechar').click()
    }
    

    selecionarArquivo(caminhoDoArquivo) {
        cy.get('input[type="file"]').selectFile(caminhoDoArquivo, { force: true });
        cy.wait(5000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
    }

    clicarPeriodo(){
        cy.get('.MuiGrid2-container > :nth-child(2) > .MuiBox-root > button').click()
    }

    selecionarPeriodo(inicial, final){
        cy.get('input[placeholder="DD/MM/AAAA"]').first().type(inicial)
        cy.get('input[placeholder="DD/MM/AAAA"]').eq(1).type(final)
    }

    aplicarFiltros(){
        cy.get('.MuiGrid2-grid-md-2 > .MuiButtonBase-root').click({force: true})
    }
}
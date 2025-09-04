export class CertificadoDigital {
    acessar(){
            cy.get('.css-irb9oh > .css-1tyayt7 > .MuiList-root > [href="/reinf/certificado-digital"]').trigger('mouseover', { force: true }).click({force: true})
    }

    incluirCertificadoDigital(){
        this.cadastrarNovoCertificadoDigital()
        this.verificarCampos()
    }

    cadastrarNovoCertificadoDigital(){
        cy.get('.MuiGrid2-root > .MuiBox-root > .MuiButtonBase-root').click({force: true})
    }

    verificarCampos(){
        if(cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root').should('contain.text', 'Nenhum dado encontrado')){
            this.cadastrarNovoCertificadoDigital()
            this.preencherCampos('Certificado Teste', 'Filipe Mitre', 'Open@2025', 'Open@2025')
        }else{
            cy.get('.MuiContainer-root').should('contain.text', 'Nome')
            cy.get('.MuiContainer-root').should('contain.text', 'Nome do proprietário')
            cy.get('.MuiContainer-root').should('contain.text', 'Senha')
            cy.get('.MuiContainer-root').should('contain.text', 'Confirme a senha')
        }
    }

    preencherCampos(nome, proprietario, senha, confirmarSenha){
        cy.get('input[placeholder="Nome do certificado"]').type(nome)
        cy.get('input[placeholder="Proprietário do certificado"]').type(proprietario)
        cy.get('input[placeholder="Senha"]').type(senha)
        cy.get('input[placeholder="Confirme a senha"]').type(confirmarSenha)
        cy.get('input[class="PrivateSwitchBase-input css-j8yymo"]').check()
        // cy.handleChatPopup()
        cy.get('.MuiButton-outlined').click()
    }
    
}

// cy.get('.css-1y8iahc > .MuiGrid2-container').should('contain.text', 'Nome do Certificado')
        // cy.get('.css-1y8iahc > .MuiGrid2-container').should('contain.text', 'Data de Validade')
        // cy.get('.css-1y8iahc > .MuiGrid2-container').should('contain.text', 'Status')
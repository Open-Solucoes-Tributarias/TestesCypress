export class MeuPlano {
    acessar() {
        cy.get('.css-1u1l0hr > .MuiStack-root > :nth-child(2)').click()
    }
    verificarCampos() {
        cy.get('.MuiGrid2-container').should('contain.text', 'Descrição do plano')
        cy.get('.MuiGrid2-container').should('contain.text', 'Gerar relatório')
        cy.get('.MuiGrid2-container').should('contain.text', 'N° de Informações Fiscais')
        cy.get('.MuiGrid2-container').should('contain.text', 'N° de usuários')
        cy.get('.MuiGrid2-container').should('contain.text', 'Consultar ISS')
        cy.get('.MuiGrid2-container').should('contain.text', 'Informações Fiscais')
        cy.get('.MuiGrid2-container').should('contain.text', 'N° de consultas GT-Fácil')
        cy.wait(2000)
        cy.get('.css-873hhh').click()
        cy.wait(2000)
        cy.get('.css-1uebcb').click()
        cy.get('.css-16v4ypd').should('contain.text', 'EXPORTAR')
    }
    clicarPerfilUsuario(){
        cy.get('.css-c99x20').click()
    }

    adicionarNovoPerfil(){
        cy.get('.css-eym1ox > .MuiButtonBase-root').click()
    }

    preencherNovoPerfil(){
        cy.get('input[placeholder="Nome do Perfil"]').type()

    }
    clicarPermissoesCliente(){
        cy.get('#mui-tree-view-1-0 > .Mui-selected').click()
    }
    selecionarPermissaoCliente(opcao){
        cy.get(`#mui-tree-view-1-0-${opcao} > .MuiTreeItem-content > .MuiTreeItem-label`).click()
    }
    
}
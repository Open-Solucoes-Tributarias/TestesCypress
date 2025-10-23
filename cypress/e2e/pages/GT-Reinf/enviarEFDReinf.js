export class EnviarEFDReinf {
    acessar(){
        cy.get('a[href="/reinf/eventos-efd-reinf"]').first().click()
        cy.wait(200)
    }

    escolherMes(mes){
        cy.get(':nth-child(2) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true});
        cy.wait(200);
        cy.get(`[data-value="${mes}"]`).click();
        cy.wait(200);
        cy.get(':nth-child(2) > .MuiBox-root > .MuiInputBase-root > input').should('have.value', mes);
    }

    escolherAno(ano){
        cy.get(':nth-child(3) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get(`[data-value="${ano}"]`).click({force: true})
        cy.wait(200)
    }

    eventoAEnviar(evento){
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get(`[data-value="${evento}"]`).click({force: true})
        cy.wait(200)
    }

    clicarAplicar(){
        cy.contains('APLICAR').click({force: true})
        cy.wait(200)
    }

    checkEmSelects(opcao){
        cy.get(`input[type="checkbox"]`).eq(opcao).click({force: true})
        cy.wait(200)
    }

    fechamentoSerie4000(){
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get('[data-value="r4099"]').click({force: true})
        cy.wait(200)
        cy.contains('APLICAR').click({force: true})
        cy.wait(200)
        cy.get('input[placeholder="Tipo de Ambiente"]').should('have.value', 'Produção Restrita')
        cy.wait(200)
        cy.get('.css-1azuhrq > .MuiButton-contained').click({force: true})
        cy.wait(200)
    }

    reaberturaSerie4000(){
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get('[data-value="r4099"]').click({force: true})
        cy.wait(200)
        cy.contains('APLICAR').click({force: true})
        cy.wait(200)
        cy.get('input[placeholder="Tipo de Ambiente"]').should('have.value', 'Produção Restrita')
        cy.wait(200)
        cy.get('.css-19bb58m').click()
        cy.wait(200)
        cy.contains('Reabertura').click()
        cy.wait(200)
        cy.get('.css-1azuhrq > .MuiButton-contained').click({force: true})
        cy.wait(200)
    }

    aceitarOperacao(){
        cy.wait(2000)
        cy.get('.css-1cbvxog > .MuiButton-root').click({force: true})
        cy.wait(200)
    }

    recusarOperacao(){
        cy.get('.MuiButton-outlined').click({force: true})
        cy.wait(200)
    }

    verificarFechamento(){
        cy.get('.MuiAlert-message > p').should('contain', 'Para fazer modificações (envios) no período é necessário o envio de um evento de REABERTURA.')
        cy.wait(200)
    }

    verificarReabertura(){
        cy.get('body').then($body => {
            if ($body.find(':contains("Período 04/2025 está fechado.")').filter(':visible').length > 0) {
                this.reaberturaEventosPeriodicos();
            }
        });
    }

    fechamentoEventosPeriodicos(){
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get('[data-value="r2099"]').click();
        cy.wait(200)
        cy.contains('APLICAR').click({force: true})
        cy.wait(200)
        cy.get('#root div:nth-child(1) > span.css-qszdlg > span.PrivateSwitchBase-root > input.PrivateSwitchBase-input').check();
        cy.wait(200)
        cy.get('button[type="button"]').contains('Enviar').click()
        cy.wait(200)
        cy.contains('Enviar R-2099').click()
        cy.wait(2500)
        cy.contains('Fechar').click({force: true})
        cy.wait(200)
    }

    reaberturaEventosPeriodicos(){
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select').click({force: true})
        cy.wait(200)
        cy.get('[data-value="r2098"]').click({force: true})
        cy.wait(200)
        cy.contains('APLICAR').click({force: true})
        cy.wait(200)
        cy.contains('Reabrir evento').click({force: true})
        cy.wait(2500)
        cy.contains('Fechar').click({force: true})
        cy.wait(200)
    }

    enviarEFDReinf(){
        cy.get('.css-yybfen > span > .MuiButtonBase-root').click({force: true})
        cy.wait(200)
        cy.get('input[placeholder="Tipo de Ambiente"]').should('have.value', 'Produção Restrita')
        cy.wait(200)
    }

    confirmarEnvio(){
        cy.get('body').then($body => {
            if ($body.find(':contains("Período 05/2025 está fechado. Para fazer modificações no período é necessário o envio de um evento de REABERTURA.")').filter(':visible').length > 0) {
                this.reaberturaEventosPeriodicos();
                cy.wait(200);
            }
        });
        cy.get('.css-1azuhrq > .MuiButton-contained').click({force: true});
        cy.wait(2000);
        cy.contains('Fechar').click({force: true});
        cy.wait(200);
    }

    cancelarEnvio(){
        cy.get('.css-1azuhrq > .MuiButton-outlined').click({force: true})
        cy.wait(200)
    }

    clicarPagamentosEnviados(){
        cy.get('.css-lgbm4q > :nth-child(3) > .MuiButtonBase-root').click({force: true})
        cy.wait(200)
    }

    clicarEventosEnviados(){
        cy.get('.css-lgbm4q > :nth-child(3) > .MuiButtonBase-root').click({force: true})
        cy.wait(200)
    }

    verResultado(){
        cy.get('.MuiSnackbar-root > .MuiPaper-root', { timeout: 35000 }).should('be.visible');
        cy.get('[aria-label="Veja os 1 resultados da consulta dos protocolos"] > .MuiBadge-root > .MuiButtonBase-root').click();
        cy.wait(2000)
        cy.contains('Fechar').click({force: true})
        cy.wait(2000)
        cy.get('.css-lgbm4q > :nth-child(3) > .MuiButtonBase-root').click({force: true})
        cy.wait(2000)
        cy.get('.MuiSnackbar-root > .MuiPaper-root', { timeout: 35000 }).should('be.visible');
        cy.get('[aria-label="Veja os 1 resultados da consulta dos protocolos"] > .MuiBadge-root > .MuiButtonBase-root').click();
        cy.wait(2000)
        cy.contains('Fechar').click({force: true})
        cy.wait(200)
    }

    exclusãoR9000(opcao){
        this.clicarEventosEnviados()
        cy.wait(2000)
        cy.get('[data-testid="DeleteIcon"]').eq(opcao).click({force: true})
        cy.wait(2000)
        cy.get('input[placeholder="Tipo de Ambiente"]').should('have.value', 'Produção Restrita')
        cy.contains('Enviar R-9000').click({force: true})
        cy.wait(2000)
        cy.contains('Fechar').click({force: true})
        this.eventoAEnviar('r9000')
        this.clicarAplicar()

        cy.get('.MuiSnackbar-root > .MuiPaper-root', { timeout: 35000 }).should('be.visible');
        cy.get('[aria-label="Veja os 1 resultados da consulta dos protocolos"] > .MuiBadge-root > .MuiButtonBase-root').click();
        cy.contains('Fechar').click({force: true})
        cy.wait(2000)
    }
    
    retificarEventos(opcao){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').eq(opcao).click({force: true})
        cy.wait(200)
        cy.contains('Retificar').click({force: true})
        cy.wait(500)
        cy.get('[data-testid="EditOutlinedIcon"]').click({force: true})
        cy.wait(2000)
    }

    salvarRetificacao(){
        cy.contains('SALVAR DOCUMENTO').click({force: true})
        cy.wait(200)
    }

    cancelarRetificacao(){
        cy.contains('Cancelar').click({force: true})
        cy.wait(200)
    }
}
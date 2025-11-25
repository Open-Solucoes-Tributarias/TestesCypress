/// <reference types="cypress" />

import { AmbTeste } from "./ambTeste"
const ambTeste = new AmbTeste()

import { AmbProducao } from "./ambProducao"
const ambProducao = new AmbProducao()



import { GTReinf  } from "./pages/GT-Reinf"
const gtreinf = new GTReinf()


import { Login } from "./pages/login"
const login = new Login()

import { Estabelecimento } from "./pages/GT-Reinf/estabelecimento"
import { GerenciarEstabelecimentos } from "./pages/GT-Reinf/gerenciarEstabelecimentos"
import { CertificadoDigital } from "./pages/GT-Reinf/certificadoDigital"
import { ParceirosDeNegocio } from "./pages/GT-Reinf/parceirosDeNegocio"
import { DocumentosFiscais } from "./pages/GT-Reinf/documentosFiscais"
import { EnviarEFDReinf } from "./pages/GT-Reinf/enviarEFDReinf"
import { Relatorios } from "./pages/GT-Reinf/relatorios"
import { Downloads } from "./pages/GT-Reinf/downloads"


const estabelecimento = new Estabelecimento()
const gerenciarEstabelecimentos = new GerenciarEstabelecimentos()
const certificadoDigital = new CertificadoDigital()
const parceirosDeNegocio = new ParceirosDeNegocio()
const documentosFiscais = new DocumentosFiscais()
const enviarEFDReinf = new EnviarEFDReinf()
const relatorios = new Relatorios()
const downloads = new Downloads()

const username = 'filipemitre@opensolucoestributarias.com.br'
const password = 'Open@2025'
const wpassword = 'XXXXXXXXX'

describe('Testes de Envio de Evento R-4010', () => {
    it('Importação de arquivos', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
        documentosFiscais.acessar()
        documentosFiscais.clicarImportarArquivos()
        documentosFiscais.escolherTipoArquivo(4)
        documentosFiscais.selecionarArquivo('cypress/fixtures/documentoIRPF (mês 6 -junho).xlsx')
        documentosFiscais.fecharAbaImportacao()
        cy.wait(2000)
    })

    it('Envio de R4010', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
        enviarEFDReinf.acessar()
        enviarEFDReinf.escolherMes('6')
        cy.wait(200)
        enviarEFDReinf.eventoAEnviar('r4010')
        enviarEFDReinf.clicarAplicar()
        cy.wait(3000)
        enviarEFDReinf.checkEmSelects(1)
        enviarEFDReinf.enviarEFDReinf()
        enviarEFDReinf.confirmarEnvio()
        cy.wait(2000)
        enviarEFDReinf.clicarPagamentosEnviados()
        enviarEFDReinf.verResultado()
    })

    it('Fechamento do R-4010', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
        enviarEFDReinf.acessar()
        enviarEFDReinf.escolherMes('6')
        cy.wait(200)
        enviarEFDReinf.eventoAEnviar('r4010')
        enviarEFDReinf.clicarAplicar()
        enviarEFDReinf.escolherMes('6')
        cy.wait(200)
        enviarEFDReinf.fechamentoSerie4000()
        enviarEFDReinf.aceitarOperacao()
        cy.wait(2000)
    })

    it('Reabertura do R-4010', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
        enviarEFDReinf.acessar()
        enviarEFDReinf.escolherMes('6')
        cy.wait(200)
        enviarEFDReinf.eventoAEnviar('r4010')
        enviarEFDReinf.clicarAplicar()
        enviarEFDReinf.verificarFechamento()
        enviarEFDReinf.reaberturaSerie4000()
        enviarEFDReinf.aceitarOperacao()
        enviarEFDReinf.escolherMes('6')
        cy.wait(200)
        enviarEFDReinf.eventoAEnviar('r4010')
        enviarEFDReinf.clicarAplicar()
        cy.wait(2000)
        enviarEFDReinf.verificarReabertura()
        cy.wait(2000)
    })
})
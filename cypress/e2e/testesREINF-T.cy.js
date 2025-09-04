/// <reference types="cypress"/>

import { AmbProducao } from "./ambProducao"
import { AmbTeste } from "./ambTeste"

const ambProducao = new AmbProducao()
const ambTeste = new AmbTeste()

import { Login } from "./pages/login"
import { GTReinf  } from "./pages/GT-Reinf"

const login = new Login()
const gtreinf = new GTReinf()

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


beforeEach(() => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
    })

    it('CT-DEV-240', () => {
        relatorios.acessar()
        relatorios.selecionarOutros()
        relatorios.escolherPDF()
        relatorios.gerarRelatorio()
    })


    it('Teste simples de verificação de campos', () => {
        cy.wait(1000)
        estabelecimento.acessar()
        estabelecimento.verificarCampos()
    })

    it('Teste de inclusão de estabelecimento', () => {
        cy.wait(1000)
        estabelecimento.acessar()
        estabelecimento.incluirEstabelecimento()
        estabelecimento.editarEstabelecimento()
        estabelecimento.clicarEliminarEstabelecimento(1)
    })

    it('Teste para R-1000', () => {
        cy.wait(1000)
        estabelecimento.acessar()
        estabelecimento.alternarR1000()
    })

    it('Teste para Certificado Digital', () => {
        cy.wait(1000)
        certificadoDigital.acessar()
        certificadoDigital.incluirCertificadoDigital()
    })

    it('Teste para Parceiros de Negócios', () => {
        cy.wait(1000)
        parceirosDeNegocio.acessar()
        parceirosDeNegocio.clicarEditar(1)
        parceirosDeNegocio.verificarCamposEditar()
        parceirosDeNegocio.clicarCancelar()
    })

    it('Teste para Documentos Fiscais', () => {
        cy.wait(1000)
        documentosFiscais.acessar()
        documentosFiscais.verificarCampos()
    })

    it('Teste para Enviar EFD Reinf', () => {
        cy.wait(1000)
        enviarEFDReinf.acessar()
        enviarEFDReinf.verificarCampos()
    })

    it('Teste para Relatórios', () => {
        cy.wait(1000)
        relatorios.acessar()
        relatorios.selecionarOutros()
        relatorios.escolherPDF()
        relatorios.gerarRelatorio()
    })

    it('Teste para Downloads', () => {
        cy.wait(1000)
        downloads.acessar()
        downloads.escolherModeloPlanilha()
        downloads.selecionarR2010()
        downloads.baixar()
        cy.wait(3000)
        downloads.escolherModeloPlanilha()
        downloads.selecionarR4020()
        downloads.baixar()
        cy.wait(3000)
        downloads.escolherModeloPlanilha()
        downloads.selecionarR4010()
        downloads.baixar()
        cy.wait(3000)
        downloads.alternarPlanilhasConversor()
        downloads.instalarGTConvert()
    })
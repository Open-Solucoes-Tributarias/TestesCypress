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
        ambProducao.acessar()
        login.fazerLoginCompleto(username, password)
        gtreinf.acessar()
    })

    it.skip('CT-DEV-240', () => {
        relatorios.acessar()
        relatorios.selecionarOutros()
        relatorios.escolherPDF()
        relatorios.gerarRelatorio()
    })


    it('Teste simples de verificação de campos', () => {
        estabelecimento.acessar()
        estabelecimento.verificarCampos()
    })

    it('Teste de inclusão de estabelecimento', () => {
        estabelecimento.acessar()
        estabelecimento.incluirEstabelecimento()
        estabelecimento.editarEstabelecimento()
        estabelecimento.clicarEliminarEstabelecimento()
    })

    it.skip('Teste para R-1000', () => {
        estabelecimento.acessar()
        estabelecimento.alternarR1000()
    })

    it('Teste para Gerenciar Estabelecimentos', () => {
        gerenciarEstabelecimentos.acessar()
        gerenciarEstabelecimentos.clicarSelecionarUsuario()
        gerenciarEstabelecimentos.escolherUsuario(0)
        cy.wait(3000)
        gerenciarEstabelecimentos.alternarSelecionarDesmarcarTodos()
        cy.wait(1000)
        gerenciarEstabelecimentos.alternarSelecionarDesmarcarTodos()
    })

    it.skip('Teste para Certificado Digital', () => {
        certificadoDigital.acessar()
        certificadoDigital.incluirCertificadoDigital()
    })

    it.skip('Teste para Parceiros de Negócios', () => {
        parceirosDeNegocio.acessar()
        parceirosDeNegocio.editarParceirosDeNegocio()
    })

    it('Teste para Documentos Fiscais', () => {
        documentosFiscais.acessar()
        documentosFiscais.verificarCampos()
    })

    it.skip('Teste para Enviar EFD Reinf', () => {
        enviarEFDReinf.acessar()
        enviarEFDReinf.verificarCampos()
    })

    it.skip('Teste para Relatórios', () => {
        relatorios.acessar()
        relatorios.selecionarOutros()
        relatorios.escolherPDF()
        relatorios.gerarRelatorio()
    })

    it.skip('Teste para Downloads', () => {
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
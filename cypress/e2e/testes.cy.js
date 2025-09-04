/// <reference types="cypress"/>

import { AmbProducao } from "./ambProducao"
import { AmbTeste } from "./ambTeste"

const ambProducao = new AmbProducao()
const ambTeste = new AmbTeste()

import { Login } from "./pages/login"
import { GTFacil } from "./pages/GT-Facil"
import { GTReinf } from "./pages/GT-Reinf"
import { IFs } from "./pages/IFs"


const login = new Login()
const gtfacil = new GTFacil()
const gtreinf = new GTReinf()
const ifs = new IFs()

//GT-Fácil
import { PesquisarCNAE } from "./pages/GT-Fácil/pesquisarCNAE"
import { PesquisarLC } from "./pages/GT-Fácil/pesquisarLC"
import { PesquisaEspecifica } from "./pages/GT-Fácil/pesquisaEspecifica"


const pesquisarCNAE = new PesquisarCNAE()
const pesquisarLC = new PesquisarLC()
const pesquisaEspecifica = new PesquisaEspecifica()



//GT-Reinf
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



//IF's
import { MeusDados } from "./pages/IF's/meusDados"
import { VisualizarInformacoes } from "./pages/IF's/visualizarInformacoes"
import { MeuPlano } from "./pages/IF's/meuPlano"
import { EnvioEControle } from "./pages/IF's/envioEControle"


const meusDados = new MeusDados()
const visualizarInformacoes = new VisualizarInformacoes()
const meuPlano = new MeuPlano()
const envioEControle = new EnvioEControle()



const username = 'filipemitre@opensolucoestributarias.com.br'
const password = 'Open@2025'

beforeEach(() => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
    })

it('CT-DEV-240', () => {
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiStack-root').click()
    relatorios.acessar()
    cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    relatorios.gerarRelatorio()
})



describe('Teste das funcionalidades do GT', () => {

    describe('GT-Fácil', () => {

        beforeEach(() => {
            gtfacil.acessar()
        })

        it('Funcionalidades Pesquisar CNAE', () => {
            pesquisarCNAE.pesquisarCNAE()
            pesquisarCNAE.selecionarDados()
            //Ver depois>
            pesquisarCNAE.verificarSimuladorCalculo()
            pesquisarCNAE.verificarGerarRelatorio()
            pesquisarCNAE.novaPesquisa()
        })

        it('Funcionalidades Pesquisar LC', () => {
            pesquisarLC.acessar()
            pesquisarLC.pesquisarLC()
            pesquisarLC.selecionarDados()
            //Ver depois>
            pesquisarLC.verificarSimuladorCalculo()
            pesquisarLC.verificarGerarRelatorio()
            pesquisarLC.novaPesquisa()
        })

        it('Funcionalidades Pesquisa Específica', () => {
            pesquisaEspecifica.acessar()
            pesquisaEspecifica.pesquisaEspecifica()
            pesquisaEspecifica.selecionarDados()
            //Ver depois>
            pesquisaEspecifica.verificarSimuladorCalculo()
            pesquisaEspecifica.verificarGerarRelatorio()
            pesquisaEspecifica.novaPesquisa()
        })

    })

    describe('GT-Reinf',() =>{

        beforeEach(() => {
            gtreinf.acessar()
        })

        it('Funcionalidades Estabelecimento', () => {
            estabelecimento.acessar()
            estabelecimento.verificarCampos()
            estabelecimento.incluirEstabelecimento()

        })

        it('Funcionalidades Gerenciar Estabelecimentos', () => {
            gerenciarEstabelecimentos.acessar()
            gerenciarEstabelecimentos.verificarCampos()
        })

        it('Funcionalidades Certificados Digitais', () => {
            certificadoDigital.acessar()
            certificadoDigital.verificarCampos()
        })

        it('Funcionalidades Parceiros de Negócios', () => {
            parceirosDeNegocio.acessar()
            parceirosDeNegocio.editarParceirosDeNegocio()
        })

        it('Funcionalidades Documentos Fiscais', () => {
            documentosFiscais.acessar()
            documentosFiscais.verificarCampos()
        })

        it('Funcionalidades Enviar EFD Reinf', () => {
            enviarEFDReinf.acessar()
            enviarEFDReinf.verificarCampos()
        })

        it.skip('Funcionalidades Relatórios', () => {
            relatorios.acessar()
            relatorios.verificarCampos()
        })

        it.skip('Funcionalidades Downloads', () => {
            downloads.acessar()
            downloads.verificarCampos()
        })           

    })

    describe('IF', () => {
        beforeEach(() => {
            ifs.acessar()
        })

        it("Envio e controle de IF's", () => {
            envioEControle.verificarCampos()
        })

        it('Meu plano', () => {
            meuPlano.acessar()
            meuPlano.verificarCampos()
        })

        it('Meus dados', () => {
            meusDados.acessar()
            meusDados.verificarCampos()
        })

        it('Visualizar informações', () => {
            visualizarInformacoes.acessar()
            visualizarInformacoes.verificarCampos()
        })
    })

})
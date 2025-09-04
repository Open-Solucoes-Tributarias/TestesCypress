/// <reference types="cypress"/>


import { AmbProducao } from "./ambProducao"
import { AmbTeste } from "./ambTeste"

const ambProducao = new AmbProducao()
const ambTeste = new AmbTeste()

import { Login } from "./pages/login"
import { GTFacil } from "./pages/GT-Facil"


const login = new Login()
const gtfacil = new GTFacil()

//GT-Fácil
import { PesquisarCNAE } from "./pages/GT-Fácil/pesquisarCNAE"
import { PesquisarLC } from "./pages/GT-Fácil/pesquisarLC"
import { PesquisaEspecifica } from "./pages/GT-Fácil/pesquisaEspecifica"


const pesquisarCNAE = new PesquisarCNAE()
const pesquisarLC = new PesquisarLC()
const pesquisaEspecifica = new PesquisaEspecifica()

const username = 'filipemitre@opensolucoestributarias.com.br'
const password = 'Open@2025'


describe('GT-Fácil', () => {

        beforeEach(() => {
            ambTeste.acessar()
            login.fazerLoginCompleto(username, password)
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
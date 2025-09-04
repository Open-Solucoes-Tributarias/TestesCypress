/// <reference types="cypress"/>

import { AmbTeste } from "./ambTeste"
const ambTeste = new AmbTeste()

import { AmbProducao } from "./ambProducao"
const ambProducao = new AmbProducao()



import { Admin } from "./pages/admin"
const admin = new Admin()

import { Cadastro } from "./pages/admin/cadastro"
const cadastro = new Cadastro()

import { Plano } from "./pages/admin/cadastro/plano"
const plano = new Plano()

import { CategoriaEmpresa  } from "./pages/admin/cadastro/categoriaempresa"
const categoriaEmpresa = new CategoriaEmpresa()

import {Empresa} from "./pages/admin/cadastro/empresa"
const empresa = new Empresa()

import { Municipio } from "./pages/admin/cadastro/municipio"
const municipio = new Municipio()






import { GTReinf  } from "./pages/GT-Reinf"
const gtreinf = new GTReinf()





import { IFs } from "./pages/IFs"
const ifs = new IFs()

import { MeusDados } from "./pages/IF's/meusDados"
import { VisualizarInformacoes } from "./pages/IF's/visualizarInformacoes"
import { MeuPlano } from "./pages/IF's/meuPlano"
import { EnvioEControle } from "./pages/IF's/envioEControle"


const meusDados = new MeusDados()
const visualizarInformacoes = new VisualizarInformacoes()
const meuPlano = new MeuPlano()
const envioEControle = new EnvioEControle()


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


describe('Testes de login', () => {
    it('Login com sucesso', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
    })

    it.skip('Login com erro e recuperar senha', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, wpassword)
        cy.wait(1000)
        login.verificarLoginIncorreto()
        login.clicarEsqueciSenha()
        login.clicarRecuperarSenha()
    })

    it('Login com erro e voltar para login', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, wpassword)
        cy.wait(1000)
        login.verificarLoginIncorreto()
        login.clicarEsqueciSenha()
        login.clicarVoltarParaLogin()
    })
})

describe('Testes de cadastro de empresa', () => {
    
    it('Cadastro de empresa', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        admin.acessar()
        cadastro.clicarCadastro()
        empresa.clicarEmpresa()
        empresa.criarEmpresa()
        empresa.preencherCNPJ('13.574.594/0001-96')
        empresa.buscarCNPJPreencher()
        empresa.selecionarCategoria(1)
        empresa.selecionarCidade(1)
        empresa.preencherCelular('11999999999')
        empresa.selecionarPlano(1)
        empresa.salvarEmpresa()
    })

    it('Editar empresa', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        admin.acessar()
        cadastro.clicarCadastro()
        empresa.clicarEmpresa()
        cy.wait(2000)
        empresa.editarEmpresa(2)
        empresa.editarEmpresaVoltar()
    })

describe('Teste de acesso aos planos', () => {

    it('Acessar planos', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        admin.acessar()
        cadastro.clicarCadastro()
        plano.acessar()
        plano.clicarEditarPlano(1)
        plano.limparCampos()
        plano.clicarChecks(1)
        plano.voltarEdicao()
    })
})

    it('Teste de Categoria de Empresa', () => {
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        admin.acessar()
        cadastro.clicarCadastro()
        categoriaEmpresa.acessar()
        categoriaEmpresa.selecionarCategoria(1)
        categoriaEmpresa.desselecionarCategoria(1)
    })

    it('Teste de Município', () =>{
        ambTeste.acessar()
        login.fazerLoginCompleto(username, password)
        admin.acessar()
        cadastro.clicarCadastro()
        municipio.acessar()
        municipio.clicarSelecionar()
        municipio.selecionarMunicipio(1)
    })
})
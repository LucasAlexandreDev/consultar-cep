/*************************************************************************** 
* Objetivo: Arquivo responsável por consumir uma API pública de CEP
* Data: 05-05-2026
* Desenvolvedor: Lucas Alexandre da Silva
* Versão: 1.0
****************************************************************************/

'use strict'

// Função responsável por conversar com o Back End (API)
const getDadosCep = async function(cep){

    // Endpoint da BrasilAPI com filtro de CEP
    const baseEndpoint = `https://brasilapi.com.br/api/cep/v1/${cep}`

    // fetch -> Faz requisição HTTP
    const response = await fetch(baseEndpoint)

    // Transformar o response em JSON
    const data = await response.json()

    return data
}


// Função responsável por montar o formulário do HTML de acordo com o CEP 
const preencherFormulario = async function(){
    
    const cep      = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep) 

    // Preenche os dados conforme o JSON da BrasilAPI
    document.getElementById('street').value       = dadosCep.street
    document.getElementById('neighborhood').value = dadosCep.neighborhood
    document.getElementById('city').value         = dadosCep.city
    document.getElementById('state').value        = dadosCep.state
}

document.getElementById('btn').addEventListener('click', preencherFormulario)
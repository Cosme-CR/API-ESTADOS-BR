

// pega a lista do outro arquivo
const objL = require("./estadocidade.js")


function getCidades (busca){
    // obj que sera o retorno
    let retorno = {}
    // vetor que recebera as cidades 
    let cidad   = []
    // contador pra saber a qnt de cidades
    let cont    = 0
    let statu   = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){

        //verifica se no obj que esta no vetor tem o vetor capital_pais
        if(estad.sigla.toUpperCase() ==  busca.toUpperCase()) {
            
            for( let cdd of estad.cidades){
                cidad.push(cdd.nome)
                cont++
            }

            retorno.uf                     =estad.sigla
            retorno.descricao              =estad.nome
            retorno.quantidade_cidades     =cont
            retorno.cidades                =cidad

            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCapitalPais (){
    // obj que tem o vetor que sera o retorno
    let retorno = {capitais:[]}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){

        //verifica se no obj que esta no vetor tem o vetor capital_pais
        if(estad.capital_pais) {
                //coloca os itens dentro do vetor que esta no obj
            retorno.capitais.push({
                capital_atual:              estad.capital_pais.capital,
                uf:                         estad.sigla,
                descricao:                  estad.nome,
                capital:                    estad.capital,
                regiao:                     estad.regiao,
                capital_pais_ano_inicio:    estad.capital_pais.ano_inicio,
                capital_pais_ano_Termino:   estad.capital_pais.ano_fim

            })
              
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getEstadoRegiao (regiao){
    // obj que sera o retorno
    let retorno = {regiao:regiao, estados:[]}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a regiao for igual o parametro da funcao  vai entrar aqui
        if(estad.regiao .toLowerCase() == regiao.toLowerCase()){
            //console.log(estad.capital)
            //emcada loop que entrar no if vai criar um obj dentro do vetor
            retorno.estados.push({uf: estad.nome, descricao: estad.nome})
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCapitalEstado (sg){
    // obj vaizio que sera o retorno
    let retorno = {}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a  sigla for igual o parametro da funcao  vai entrar aqui
        if(estad.sigla.toLowerCase() == sg.toLowerCase()){
            //console.log(estad.capital)
            //cria novos coisa dentro do obj e coloca os itens que estao no vetror
            retorno.uf        = estad.sigla
            retorno.descricao = estad.nome
            retorno.capital   = estad.capital
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

///////////////////////////////////////////////////////////////////////////////////

function getDadosEstado (sg){
    // obj vaizio que sera o retorno
    let retorno = {}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a  sigla for igual o parametro da funcao  vai entrar aqui
        if(estad.sigla.toLowerCase() == sg.toLowerCase()){
            //console.log(estad.capital)
            //cria novos coisa dentro do obj e coloca os itens que estao no vetror
            retorno.uf        = estad.sigla
            retorno.descricao = estad.nome
            retorno.capital   = estad.capital
            retorno.regiao    = estad.regiao
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

///////////////////////////////////////////////////////////////

function getListaDeEstado(){
    //vai ser o contador
    let cont = 0
    //vetor auxiliar q vai receber as siglas dos estados
    let sigla = []
    // laco que vai percorrer o vetor estados q ta dentro do  obj listaDeEstado
    for(let est of objL.listaDeEstados.estados){
        //vetor sigla vai ta recendo a sigla do est.siglaa
        sigla.push(est.sigla)
        //so vai contar pra saber quantas siglas tem q é a qnt de estados 
        cont ++
    }
    //obj auxiliar no qual sera o retorno da função mandando a sigla com a qnt 
    let retorno = {
        uf: sigla,
        quantidade :cont, 
    }
    return retorno
}

module.exports={

    // retorna dados da capital de um estado de acordo com a sigla recebida
    getCapitalEstado,

    //retorna todas os estados que ja foram capitais
    getCapitalPais,

    //retorna todas a cidades de acordo com a sigla do estado informado 
    getCidades,

    //retorna  as informaçao de um estado de acordo com a sigla recebida
    getDadosEstado,

    //retorna a lista de estados de acordo com a regiao fornecida
    getEstadoRegiao,

    //mostra uma lista de estados do brasil
    getListaDeEstado,
    
}

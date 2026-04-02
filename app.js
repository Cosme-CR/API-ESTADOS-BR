
const express = require("express")
const cors    = require("cors")

// criar um objeto pra manioular o express
const app = express()

const corsOptions ={
    origin:["*"],  //origem da requisisao podenendo ser um ip ou um * que significa todos
    methods:"GET", // metodos que serao liberados na api
    allowedHeaders:["Content-Type", "Authorization"],//sao permissoes de cabecalho do cors
}
//configura as permisooes da api pelo cors
app.use(cors(corsOptions))

// response retornos da API
//request  sao chegada de dados da api

const estadCidade = require("./module/funcoes.js")


//criando ENDpoint para API
//cada endpoit retorna um json

//mostra a lista de estados do brasil
app.get("/v1/senai/dados/estados", function(request,response){
    let estado = estadCidade.getListaDeEstado()
    
    //mostra q ta ok
    response.status(200)
    response.json(estado)
    
})

//pega os dados de um estado que foi passado a sigla
app.get("/v1/senai/dados/estado/:uf", function(request,response){

    let sigla = request.params.uf
    let estado = estadCidade.getDadosEstado(sigla)
    if (estado){
        response.status(200)
        response.json(estado)
       
    }else{
        response.status(404)
        response.json({"message": "O Estado não existe"})
      
    }
    
})

//mostra todas as cidades de um estado que foi passado atarves da sigla
app.get("/v1/senai/dados/cidades/:uf",function(request, response){
    let sigla = request.params.uf
    let estado = estadCidade.getCidades(sigla)
    if (estado){
        //console.log(request.params.uf) 
        response.status(200)
        response.json(estado)
        
    }else{
        response.status(404)
        response.json({"message": "O Estado não existe"})
        
    }
})

//retorna todos estados que foram capiais do brasil
app.get("/v1/senai/dados/capital/brasil", function(request,response){
    let estado = estadCidade.getCapitalPais()
    response.status(200)
    response.json(estado)

})

//retorna dados da capital de um estado de acordo com a sigla fornecida
app.get("/v1/senai/dados/capital/estados/:uf", function(request,response){
    let sigla = request.params.uf
    let estado = estadCidade.getCapitalEstado(sigla)
    response.json(estado)
    //console.log(request.params.uf) 
    response.status(200)


    if (estado){
        //console.log(request.params.uf) 
        response.status(200)
        response.json(estado)
        
    }else{
        response.status(404)
        response.json({"message": "O Estado não existe"})
        
    }
    
})

//mostra estados que existem na região fornecida
app.get("/v1/senai/dados/estados/regiao/:regiao", function(request,response){
    
    let regiao = request.params.regiao
    let estados = estadCidade.getEstadoRegiao(regiao)
    if (estados){
        //console.log(request.params.uf) 
        response.status(200)
        response.json(estados)
        
    }else{
        response.status(404)
        response.json({"message": "O regiao não existe"})
        
    }
    
})


app.get("/v1/senai/help", function(request, response){
    let docAPI = {
        "API-description": "api pra manipular dados de estados e cidades brasileiro",
        "date": "026-04-02",
        "developer": "sdxd",
        "version": "1.0",
        "Endpoints": [
            {
                "id":1,
                "rota1":"/v1/senai/dados/estados",
                "obs": "mostra a lista de estados do brasil"
            },

            {
                "id":2,
                "rota2":"/v1/senai/dados/estado/:uf",
                "obs": " pega os dados de um estado que foi passado a sigla "
            },

            {
                "id":3,
                "rota3":"/v1/senai/dados/cidades/:uf",
                "obs": " mostra todas as cidades de um estado que foi passado atarves da sigla "
            },

            {
                "id":4,
                "rota4":"/v1/senai/dados/capital/brasil",
                "obs": " retorna todos estados que foram capiais do brasil "
            },

            {
                "id":5,
                "rota5":"/v1/senai/dados/capital/estados/:uf",
                "obs": " retorna dados da capital de um estado de acordo com a sigla fornecida  "
            },

            {
                "id":6,
                "rota6":" /v1/senai/dados/estados/regiao/:regiao ",
                "obs": " mostra estados que existem na região fornecida "
            },


        ]

    }
})




//serve pra iniciar a api
app.listen(8080,function(){console.log("api funcionando")})

#  API de Estados e Cidades do Brasil

Esta API foi desenvolvida utilizando **Node.js** com **Express**, com o objetivo de fornecer dados sobre estados e cidades brasileiras.

##  Tecnologias utilizadas

* Node.js
* Express
* CORS

##  Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```

##  Como executar

```bash
node app.js
```

A API será iniciada em:

```
http://localhost:8080
```

---

##  Endpoints

###  Listar todos os estados

```
GET /v1/senai/dados/estados
```

Retorna a lista de todos os estados do Brasil.

---

###  Buscar dados de um estado

```
GET /v1/senai/dados/estado/:uf
```

Parâmetro:

* `uf` → Sigla do estado (ex: SP, RJ)

---

###  Listar cidades de um estado

```
GET /v1/senai/dados/cidades/:uf
```

Parâmetro:

* `uf` → Sigla do estado

---

###  Capitais do Brasil

```
GET /v1/senai/dados/capital/brasil
```

Retorna os estados que já foram capitais do Brasil.

---

###  Capital de um estado

```
GET /v1/senai/dados/capital/estados/:uf
```

Parâmetro:

* `uf` → Sigla do estado

---

###  Estados por região

```
GET /v1/senai/dados/estados/regiao/:regiao
```

Parâmetro:

* `regiao` → Nome da região (ex: sul, sudeste, nordeste)

---

###  Documentação da API

```
GET /v1/senai/help
```

Retorna informações gerais sobre a API e seus endpoints.

---

##  Configuração de CORS

A API está configurada para aceitar:

* Origem: `*` (qualquer origem)
* Método: `GET`
* Headers permitidos:

  * Content-Type
  * Authorization

---

##  Tratamento de erros

A API retorna:

* `200` → Sucesso
* `404` → Estado ou região não encontrado

Exemplo:

```json
{
  "message": "O Estado não existe"
}
```

---

## 👨‍💻 Autor

* Desenvolvido por: **sdxd**
* Versão: 1.0
* Data: 2026-04-02



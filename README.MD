# API de Filmes

Uma API REST simples em Node.js para gerenciamento de filmes.

## Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone o repositório.
3. Instale as dependências executando:
   npm install
4. Inicie o servidor:
   node server.js

## Rotas da API

* **GET /api/filmes:** Retorna a lista de todos os filmes.
* **POST /api/filmes:** Adiciona um novo filme. Envie um JSON no corpo da requisição:
  ```json
  {
      "titulo": "Tropa de Elite",
      "ano": 2007
  }

Por quê usei o Feature Branch Workflow?
Decidi usar este workflow porque ele isola o desenvolvimento de novas funcionalidades (como a rota POST) da base de código principal (main). Isso garante que a branch main contenha apenas código estável e funcional. Facilita a revisão de código, previne que bugs cheguem à produção e é o padrão de mercado mais utilizado para desenvolvimento ágil, inclusive em projetos em equipe.
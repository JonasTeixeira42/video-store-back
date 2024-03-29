# Descrição do Projeto

Essa é uma aplicação desenvolvida em Node.js, faz parte da aplicação back-end do projeto 'Locadora'. A aplicação tem por objetivo, gerenciar um funcionamento locadora, podendo fazer o cadastro dos filmes que esta pertence e os diretores destes filme.

# Instalação

- Executar o comando **yarn install**
- Executar o comando **docker run --name soitic -e POSTGRES_PASSWORD= -p 5432:5432 -d postgres**
- Executar o comando **docker start soitic**
- Executar o comando **yarn sequelize db:migrate**

**Informações sobre o banco está [aqui](src/config/database.js)**

# Rodar projeto

executar comando **yarn dev**

# Bibliotecas utilizadas

- Foi utilizado Postgres como banco de dados.
- Foi utilizado Sequelize como ORM, criação de migrations e operações no banco de dados.
- Foi usado o framework Express para gerenciamento de rotas.
- Foi usado Yup para validar os dados do modelo.
- Foi usado Multer para gerenciamento de uploads de arquivo na aplicação.

## Director

- [Cadastrar Diretor](doc/director/create_director.md) : `POST /directors`
- [Consultar Diretores](doc/director/get_all_directors.md) : `GET /directors`

## Movies

- [Cadastrar Filmes](doc/movie/create_movie.md) : `POST /movies`
- [Consultar Filmes](doc/movie/get_all_movies.md) : `GET /movies`
- [Atualizar Diretor](doc/movie/update_movie.md) : `PUT /movies/{id}`
- [Deletar Diretor](doc/movie/delete_movie.md) : `DELETE /movies/{id}`

# Descrição do Projeto

Essa é uma aplicação desenvolvida em Node.js, faz parte de um conjunto de desafios para estudos. A aplicação tem por objetivo, gerenciar um funcionamento de uma academia, envios de e-mail para novas matriculas, fazendo um resumo do plano escolhido, preco, duração do plano. autenticação JWT, cadastro de usuários, upload de arquivos e fichas de treinos. O desafio também possui um front-end feito em React e mobile usando React-Native.

# Instalação

Executar o comando **yarn install**

**Em caso de erro, executar os seguintes passos**

- **yarn sequelize db:migrate**
- criar arquivo **.env** e preenche-lo seguindo exemplo do arquivo **.env.example**

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

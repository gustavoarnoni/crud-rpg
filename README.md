**CRUD - RPG - Desafio Profissional 7**

**Nome**: Gustavo Arnoni

**RA**: 123456789

Descrição
---------

Este projeto implementa um **sistema de gerenciamento de RPG**. Ele permite o gerenciamento de **personagens** e **itens mágicos** no contexto de um jogo de RPG. A aplicação permite a criação, listagem, atualização e remoção de personagens e itens mágicos, além de associar itens mágicos aos personagens, com validações específicas.

Funcionalidades
---------------

*   **Cadastro de Personagens**: Criação e gerenciamento de personagens com atributos como nome, classe, força e defesa.
*   **Cadastro de Itens Mágicos**: Criação de itens mágicos, com tipos como "Arma", "Armadura" e "Amuleto", com validações específicas para cada tipo.
*   **Associação de Itens Mágicos ao Personagem**: Possibilidade de adicionar itens mágicos a personagens, com regras de quantidade e tipo.
*   **Documentação Interativa**: A API é documentada e pode ser testada através do **Swagger**.

Como Rodar a Aplicação
----------------------

1.  Clone o repositório:
    
        git clone https://github.com/gustavoarnoni/crud-rpg.git
    
2.  Navegue para a pasta do projeto:
    
        cd crud-rpg
    
3.  Instale as dependências:
    
        npm install
    
4.  Crie um arquivo `.env` na raiz do projeto e adicione a URI de conexão com o MongoDB:
    
        MONGODB_URI=mongodb+srv://gustavoarnoni4:batata123@cluster.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority
    
5.  Execute o servidor:
    
        npm run start:dev
    
6.  Acesse a documentação interativa Swagger da API em:
    
        http://localhost:3000/api
    

Tecnologias Utilizadas
----------------------

*   **NestJS**: Framework para construir aplicações server-side.
*   **MongoDB**: Banco de dados NoSQL.
*   **Swagger**: Documentação interativa da API.
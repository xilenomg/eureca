# Eureca

## Sobre o autor
Luis Felipe Corrêa Pérez
https://www.linkedin.com/in/xilenomg/
xilenomg@gmail.com
(31) 98334-6577

## Requerimentos
- Node 10
- MySQL

## Configuração
Alterar informações de banco de dados server/src/config/config.json.
Tentando utilizar o docker-compose.yml para instalar o MySQL, porém estou com alguma limitações de acesso a internet.

### Importante
Baixar e adicionar arquivos IMDb dentro da pasta imdb na raiz do projeto.

## Instação
Instalar dependencias
1. npm install
Instalar estrutura DB
2. npm run db:install
Inserir dados IMDb ao banco
3. npm run db:seed
Criar bundler na pasta /dist
4. npm run build
Iniciar projeto
5. node index

## Acesso
Abrir browser no endereço:
http://localhost:3000/

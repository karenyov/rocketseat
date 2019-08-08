# Rocketseat

Aplicação WEB e Mobile realizada no Workshop [Rocketseat](https://rocketseat.com.br).

Este repositório contém o código desenvolvido na parte da API

## Requisitos
- [Nodejs]()
- [Yarn]()

## Características
> Utilizado Yarn
> Banco de Dados: MongoDB Atlas

## Rodando
Entrar na pasta do projeto e executar: ``` yarn dev ```

### URLs API
Cadastro Devs
- POST = http://localhost:3333/devs
Ex: { "username": "karenyov"}


LIKES e DISLIKES
- POST = http://localhost:3333/devs/ID_USER_LIKE/likes
Ex: Headers { user: id_userlogado}

listagem Devs
- GET = http://localhost:3333/devs
Ex: { "username": "karenyov"}

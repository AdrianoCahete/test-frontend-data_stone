# Teste para vaga de FrontEnd para Data Stone

Normalmente eu documento tudo em inglês, por padrão de mercado e costume de empresas antigas, todavia, esse readme é em português porque o desafio da vaga veio em português.

## Desafio

> Você irá construir de um cadastro cliente simples e associação de produtos oferecidos ao mesmo.  
>
> A tela de **cadastro de produtos** deve conter os seguintes campos (nome, ativo(Sim ou Não)) e a de **clientes** (nome, documento, telefone,
e-mail, ativo(Sim ou Não)) e outra tela para **associar os produtos** ao cliente com o nome do cliente e os produtos para associar.
>  
> Nossa ideia é que possamos disponibilizar para a área comercial um cadastro de clientes e uma forma de associação dos produtos que esse cliente tem
disponível para utilizar em nosso site serviços. Para que possamos controlar a visualização do que nosso cliente possa usar em nossa plataforma.  
>
> Após os cadastros gostaríamos de ver uma **listagem com os produtos** cadastros com opção para editar e inativar/ativar e **listagem com todos os cliente** com as opções de edição, inativar/ativar e associar produtos

### Telas

- Cadastro de Produtos
  - Nome
  - Ativo

- Cadastro de Cliente
  - Nome
  - Documento
  - Telefone
  - E-mail
  - Ativo

- Associação de Produto <> Cliente

- Listagem de Produtos
  - Opção para editar
  - Opção para ativar/inativar

- Listagem de Clientes
  - Opção para Editar
  - Opção para Ativar/Inativar
  - Opção para Associar Produtos

## Setup

`npm install && npm run dev`

(ou troque o `&&` por `;` caso o ambiente seja windows)

### Tests

Para rodar os testes do Playwright, primeiramente tenha certeza de que o projeto está instalado e rodando, depois instale os browsers com `npx playwright install`, dai rode os testes com `npm run test`

## API Mock

TODO: Como iniciar

## Decisões do projeto

Comecei com o óbvio: setup do repo e da base do projeto. Na parte do desafio em si, preferi iniciar na UI porque ela é mais fácil de ser feita.

Depois, provavelmente, vou partir pras regras de negócio (login e permissionamento), API e testes.

### UI

Como a descrição dizia telas diferentes, mas não rotas, optei por manter o mínimo possível de telas, pra evitar o salto do usuário, consequentemente diminuindo os loadings, e usar os cadastros e edições como popup na tela de listagem.  
Com isso, inicio pela tela de listagem de clientes.

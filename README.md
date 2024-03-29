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
  - Opção para Criar
  - Opção para Editar
  - Opção para Ativar/Inativar

- Listagem de Clientes
- - Opção para Criar
  - Opção para Editar
  - Opção para Ativar/Inativar
  - Opção para Associar Produtos

## Setup

`npm install && npm run prepare && npm run dev`

(ou troque o `&&` por `;` caso o ambiente seja windows)

Ao rodar o `npm run dev`, automaticamente o servidor de mock da API é iniciado, junto ao front. Se quiser rodar só o front, use `npm run dev:front`
Caso queira algo específico, olhe a seção de API abaixo.

## Tests

Ao rodar `npm run test`, todos os testes vão rodar. São 3 tipos: unitários, end2end (UI) e lint.

### End2End

Para rodar os testes do Playwright (end to end), primeiramente tenha certeza de que o projeto está instalado e rodando, depois instale os browsers com `npx playwright install`, dai rode os testes com `npm run test`

Atualmente está testando com o Chromium e o Safari (webkit).

### Unitários

Os unitários são somente em cima dos componentes que recebem propriedades.   Components que são estáticos ou só existem pra facilitar o código não tem testes unitários (mas tem o end2end).

### Lint

O lint é feito em cima de todos os arquivos com as seguintes extensões: `.vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts`.

## Commits

Os commits deverão seguir as regras [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). O commit será negado caso não passe nos testes. O Github pode negar também.

## API Mock

Ao rodar o `npm run dev`, o servidor da API é automaticamente iniciado, mas caso queira rodar o mock separadamente, rode `npm run api`.

O API Mock escuta na porta `3100`.

### Rotas

A edição das rotas fica na pasta `./mocks/routes` e é por arquivo. No topo do arquivo tem um comentário com a url da documentação.

Os endpoints atuais são:  
<http://localhost:3100/api/users>  
<http://localhost:3100/api/clients>  
<http://localhost:3100/api/products>

### API Admin

<http://localhost:3510/docs>

## Decisões do projeto

Comecei com o óbvio: setup do repo e da base do projeto. Na parte do desafio em si, preferi iniciar na UI porque ela é mais fácil de ser feita e é a maior parte do tempo, já que normalmente em projetos reais, a API vem do backend ou é mockada via filesystem.

Depois, provavelmente, vou partir pras regras de negócio (login e permissionamento), API e testes. Pode ser que eu faça os testes antes por causa do gateway de QA.

### UI

Já que a ideia é ver como o projeto é criado, analisando _"organização, semântica, estrutura, legibilidade e manutenibilidade do código"_, optei em não usar nenhuma lib de UI, mas normalmente eu optaria pelo Nuxt UI pro projeto geral. Provavelmente usarei o FormKit só pra validação dos forms.

Como a descrição dizia telas diferentes, mas não rotas, optei por manter o mínimo possível de telas, pra evitar o salto do usuário, consequentemente diminuindo os loadings, e usar os cadastros e edições como popup na tela de listagem.  
Com isso, inicio pela tela de listagem de produtos, seguido pela de clientes.

### CSS

Optei por usar o SCSS porque é mais fácil de concatenar as classes e dá pra criar funções específicas. Criei (na verdade o `create-vue-app` cria, mas eu mantive porque uso dessa maneira mesmo) um arquivo base para as variáveis e a base do projeto, que é uma só. E, ao invés de criar um css pra cada arquivo e importar, uso o template de cada view/component e crio lá, porque fica tudo no mesmo arquivo e, consequentemente, mais fácil de gerenciar.

Sobre a metodologia, eu gosto de usar o [SMACSS](https://smacss.com/) em conjunção com o [BEM](https://getbem.com/), dado que eles não são padrões à serem seguidos à risca, mas uma ideia.  
Uso o SMACSS pra estruturar os arquivos, usando o padrão de `Base, Layout, Module, State e Theme`, mas na nomenclatura das classes usar o BEM, `Bloc, Element, Modifier`.

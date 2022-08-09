## IGNews - Fluxo da aplicação

Aplicação de conecta com diferentes APIs para implementar diferentes funcionalidades:

- Autenticação (GitHub 0Auth) - https://auth0.com/pt
- Stripe (Api para pagamentos online) - https://stripe.com/docs/api
- FaunaDB (Banco para salvamento das informações do usuário) - https://fauna.com/

<img src="./fluxo-aplicação.PNG" alt="Fluxo da aplicação"/>

## Tecnologias utilizadas

- Nextjs (estrutura base da aplicação)
- SASS - Estilização -> escolhida à título de conhecimento


## NEXT - formas de fazer chamadas a API -> popular a página com informações

Client-Side : Ex: fetch(), axios no componente, faz a chamada pelo lado do cliente: requisição HTTP;

- Quando: Ao apresentar informações que não precisam ser carregadas de imediato quando a página for montada, ou seja, dados que só serão carregados após uma determinada ação do usuário ou algum evento específico.

Server-Side:  Faz a chamada no servidor node.js do Next, e não no browser.

Isso garante que a aplicação já será renderizada contendo os dados da API, que pode ser mais lenta que a construção da página pelo browser [ layout shift ]. 

- Quando: São necessários dados dinâmicos da sessão do usuário, informações em tempo real.

Static Site Generation: Objetiva otimizar aplicações que possuem páginas estáticas, isto é que serão mostradas da mesma forma para todos aqueles que a acessarem. 

- Quando: home de um blog, página de um produto em um e-commerce;

  <img src="./models.PNG" alt="Fluxo da aplicação"/>

## Na Aplicação

Para este projeto, na página Home, sempre será mostrado para os usuários a mesma informação; Sob este paradigma, torna-se vantajoso a utilização do Static Site Generation, contextualizado acima. Isso é implementado no código no arquivo src/pages/index.tsx, pela função getStaticProps.

A  propriedade revalidate, definida nessa mesma função, determina o tempo que a página deve ser mantida sem a necessidade de reconstrução. O tempo de ravalidação definido para este projeto é de 24 horas.


## Autenticação com NextAuth

- Variáveis de estado salvas no arquivo .env.local

- Seguindo a documentação do Nextauth, foi adicionado o diretorio com o arquivo api/auth/[...nextauth].ts

- Determinação do escopo => O que poderá ser acessado após a autenticação

- Realização da autenticação por meio do componente utilizando a função nativa do next-auth signIn(''),
que recebe como parâmetro qual a autenticação que está sendo realizada: googlr, github, facebook, etc.

- Por meio do hook useSession ; Um dos parametros que o hook retorna é se o usuário está logado ou não "session" e por meio dele é possível manipular o código, de forma a controlar o que será mostrado caso o usuario esteja logado ou nao

- Afim de compartilhar com os componentes da aplicação informações referentes à sessão do usuário, utiliza-se o contexto do proprio Nextauth/client, implementado na função MyApp - 


# BANCO DE DADOS - UTILIZAÇÃO FAUNADB

Vantajoso para aplicações do tiver serverless

NEXTAUTH CALLBACKS - Funções que são automaticamente executadas após uma determinada ação

## MISCELANEOUS
<!-- Link para solução e atualização do Next -->
<!-- https://app.rocketseat.com.br/h/forum/react-js/acde5602-bac1-4f69-8161-59feefed16bd -->
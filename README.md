# Pokedex

Esse projeto tem como objetivo servir de base para o treino de tecnologias relacionadas ao ecossistema React.JS. Para isso eu decidi usar uma abordagem de refatorações constantes para abranger várias técnicas e modelos de programação.

## Como funciona?

O esqueleto do projeto foi montado em um arquivo único e a partir disso feita a componentização e organização da arquitetura do projeto. Por se tratar de um projeto de estudos, creio que é uma abordagem eficiente, pois força a pensar de diferentes maneiras sobre um único problema.

# Contribuições

O projeto será versionado de forma a facilitar a transição entre as diferentes abordagens que poderá ser utilizada em cada nível de complexidade adicionada. A branch **main** sempre será a mais avançada.

## PRs e Commits

Os commits e PRs seguirão um padrão para facilitar a compreensão de pessoas que estão iniciando na área do desenvolvimento de software. seguindo o modelo:

### Commit

**Titulo** - O título do commit deverá indicar o que foi feito no mesmo. Pode ser um título genérico desde que possa abranger de forma simples e direta tudo o que foi modificado neste commit. Caso haja mudanças em vários segmentos do projeto, recomendo fragmentar essas modificações em commits separados, para ajudar a manter a organização.
**Corpo** - No corpo do commit será utilizado um emoji e a descrição resumida de cada modificação feita. Os emojis seguirão o padrão [gitmoji](https://gitmoji.dev/).
**Rodapé** - Por fim a referenciação da branch em que esse commit foi baseado. Como esse projeto haverá varias abordagens de desenvolvimento, é uma medida para evitar a subida de códigos em branchs conflitantes.

|------------------------------------------------------------------------|

Refatoração dos cards

:new: Adicionada sessão para os tipos dos pokemons
:recycle: Refatora função de coleta de informações dos pokemons

Branch-base: main

|------------------------------------------------------------------------|

### PR

Título - Para as PRs, o título deve resumir o que os commits fazem de forma sucinta, podendo ser feito um resumo melhor elaborado no corpo da PR.
Corpo - Será listados os títulos dos commits que compõem a PR, assim como uma cópia da descrição do mesmo para facilitar quem for fazer uma revisão ou pesquisa nas alterações do projeto.

|------------------------------------------------------------------------|

Melhorias nos componentes e resolver bugs

Para resolver o bug referente a issue #01 sobre imagens que não aparecem as vezes, foi necessária a atualização da api utilizada para uma versão compatível.

- Refatoração dos cards
  :new: Adicionada sessão para os tipos dos pokemons
  :recycle: Refatora função de coleta de informações dos pokemons
- Bugfix no componente de search
  :fire: Remove funções obsoletas não utilizadas
  :arrow_up: Atualiza api de imagens

|------------------------------------------------------------------------|

## Cuidados

- PRs devem serem feitas para a branch que originou todos os commits da mesma. Caso haja commits de diferentes branch originárias, a PR deve ser cancelada e refeita com as correções
- Antes de solicitar uma PR, garanta que o código está compatível. Recomendo que as branchs da PR sejam mergeados em modo no-ff (sem fast forward) e feito rebase na branch de origem antes de fazer a solicitação.

# Créditos

### Desenvolvimento do projeto:

[![Evandr0](https://avatars.githubusercontent.com/u/30902400?s=100)](https://github.com/0rdnave)

### Referências

Projeto do [figma](https://www.figma.com/community/file/979132880663340794) feito por  
[hsricardo](https://github.com/hsricardo) (Ricardo Schiniegoski)

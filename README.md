# Desafio 1 :boom: :rocket:

Esse é o desafio 1 do módulo de nodeJS da rocketseat, ele consiste em realizar as seguintes tarefas:

**Configure uma aplicação utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.**

### Rotas :taxi:

- [x] /: Rota inicial que renderiza uma página com um formulário com um único campo age que representa a idade do usuário :eyes:

- [x] /check: Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior que 18 e o redireciona para a rota /major, caso contrário o redireciona para a rota /minor (Lembre de enviar a idade como Query Param no redirecionamento); :guardsman:

- [x] /major: Rota que renderiza uma página com o texto: Você é maior de idade e possui x anos, onde x deve ser o valor informado no input do formulário; :sunglasses:

- [x] /minor: Rota que renderiza uma página com o texto: Você é menor de idade e possui x anos, onde x deve ser o valor informado no input do formulário; :underage:

### Middlewares :godmode:

- [x] Deve haver um middleware que é chamado nas rotas /major e /minor e checa se a informação de idade não está presente nos Query Params. Se essa informação não existir deve redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve apenas continuar com o fluxo normal.

# Acessem a RocketSeat e a He4rtDevs: :exclamation: :purple_heart:

[Discord He4rt](discord.io/He4rt)

[Twitter He4rt](https://twitter.com/He4rtDevs)

[RocketSeat](https://rocketseat.com.br/)

[My Twitter](https://twitter.com/m7Aei_He4rt)

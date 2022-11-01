# Back-end do projeto e-commerce:
(https://github.com/Bruno-TL/Digital-Store) => Ainda não implementado .

# Início :
- Fazer um clone do nosso repositório: git clone https://github.com/Bruno-TL/e-commerce-backEnd
- Primeiros comados para rodar o projeto no modo saboroso: npm install && npm start .
- Usamos Insomnia para testar os end-points. End-points do insomnia salvo em arquivo.
- URL para testar o projeto : http://localhost:3000 ;

## End-points:
# 1° Usuário (com jwt)
- GET /usuarios =>  Vem todos os usuários;
- GET /usuario/:usuarioID => Vem o usuário com o id passado na url com autenticação no Headers;
- POST /login => Fazer o login do usuario com o email e senha, gerando um token.

# 2° Produtos 
- GET /produtos => Para ver todos os produtos;
- POST /produtos => Para criar um novo produto.

# 3° Promoções
- GET /promocao => Escolher os últimos dois produtos e colocar em promoção.

# 4° Comentario
- GET /comentario/:IdProduto => Ver os comentarios salvos em arquivo.

# 5° Carrinho 
- GET /carrinhos => Ver todos o produtos/carrinhos;
- GET /carrinho/:id => Pegar todos produtos do carrinho com o id do usuário(com jwt);
- POST /carrinho/:id => Criar um produto para o carrinho do usuário(id) específico;
- PUT /carrinho/:id => Modificar a quantidade do produto, produto sendo escolhido pelo o id dele;
- DELETE /carrinho/:idproduto => Zerando todos os valores do produto;

# Colaboradores:
Bruno: https://www.linkedin.com/in/t-bruno-dev-js/

Samuel :  https://www.linkedin.com/in/samuel-gomes-114257252/

Sergio : https://www.linkedin.com/in/sergioferreira06/

Marcelo : https://www.linkedin.com/in/jo%C3%A3o-marcelo-009873234/

Neville : https://www.linkedin.com/in/neville-monteiro-432a83180/

Ciro : https://www.linkedin.com/in/cirojales/

Diene:  https://www.linkedin.com/in/DieneLopes 

Matheus: https://github.com/SergioMatheuss


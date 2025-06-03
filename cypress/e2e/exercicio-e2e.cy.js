/// <reference types="cypress" />


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      cy.login('aluno_ebac@teste.com', 'teste@teste.com')
      cy.visitarProduto('Ingrid Running Jacket')
      cy.addProdutoCarrinho('XS', 'Orange', 1)
      cy.visitarProduto('Augusta Pullover Jacket')
      cy.addProdutoCarrinho('S', 'Blue', 2)
      cy.visitarProduto('Josie Yoga Jacket')
      cy.addProdutoCarrinho('M', 'Black', 3)
      cy.visitarProduto('Stellar Solar Jacket')
      cy.addProdutoCarrinho('L', 'Yellow', 4)
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-order-overview').should('exist')

      
    
    });
      
  });

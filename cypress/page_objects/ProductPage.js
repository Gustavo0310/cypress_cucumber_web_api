class ProductPage {
    selectFirstProduct() {
      cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
    }
  
    addToCart() {
      cy.get('.fixedBtn > .roboto-medium').click();
    }
  
    verifyProductAddedToCart() {
      cy.get('#shoppingCartLink').click();
      cy.wait(3000);
      cy.get('thead > tr > :nth-child(2)').should('be.visible');
    }
  }
  
  export default ProductPage;
  
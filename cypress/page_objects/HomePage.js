class HomePage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    searchForProduct(product) {
      cy.get('#mobileSearch > .roboto-medium').click();
      cy.get('#mobileSearch > .roboto-medium').type(product);
      cy.get('#mobileSearch > .roboto-medium').type('{enter}');
    }
  }
  
  export default HomePage;
  
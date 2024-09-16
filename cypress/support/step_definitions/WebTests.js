const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');  // Importar Given, When, Then

import HomePage from '../../page_objects/HomePage';
import ProductPage from '../../page_objects/ProductPage';
import CartPage from '../../page_objects/CartPage';  // Certifique-se de que o nome é CartPage

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();  // Corrigido para CartPage

Given('que estou na página inicial do site Advantage Online Shopping', () => {
  homePage.visit();
});

When('eu digito HeadPhones na barra de busca e pesquiso', () => {
  homePage.searchForProduct('HeadPhones');
});

Then('eu devo ver uma lista de produtos relacionados a Fones de Ouvido', () => {
  cy.get('.select').should('be.visible');
});

Given('que eu tenho uma lista de produtos após a busca, clico no produto de minha preferência', () => {
  productPage.selectFirstProduct();
});

When('após os detalhes do produto serem exibidos, clico no botão “ADD TO CART”', () => {
  productPage.addToCart();
});

Then('o produto "Fone de Ouvido XYZ" deve ser adicionado ao meu carrinho', () => {
  productPage.verifyProductAddedToCart();
});

Given('que eu adicionei um "Fone de Ouvido XYZ" ao carrinho', () => {
  cartPage.openCart();
  cartPage.verifyProductInCart('Fone de Ouvido XYZ');
});

When('eu navego até a tela de pagamento', () => {
  cartPage.proceedToCheckout();
});

Then('eu devo ver o "Fone de Ouvido XYZ" listado no carrinho de compras', () => {
  cartPage.verifyProductInCart('Fone de Ouvido XYZ');
});

Then('o preço do "Fone de Ouvido XYZ" deve ser exibido corretamente', () => {
  cartPage.verifyProductPrice('13.99');
});

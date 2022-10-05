import HomePage from "./HomePage";
import ListCompte from "./ListCompte";
import Product  from "./ProductPage"



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://www.amazon.fr/')
    
  })
it('passes', () => {

  HomePage.acceptCookie();
  HomePage.clickAccountList();
  ListCompte.inputTelephoneNumber()
  cy.get('#auth-error-message-box ').contains('Numéro de téléphone incorrect')
  
})
it('passes', () => {

  HomePage.acceptCookie
  HomePage.searchWithButton("Apple iPhone 13 Pro Max (256 Go) - Vert Alpin")
  Product.select();

 
})
})

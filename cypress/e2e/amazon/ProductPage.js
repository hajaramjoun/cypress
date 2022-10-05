class Product {
    select() {
        cy.xpath('//*[contains(@alt,"Apple iPhone 13 Pro (512 Go) - Vert Alpin")]',{timeout:400}).should('be.visible').click()
 
    }
}
export default Product=new Product();
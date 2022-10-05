class ListCompte{

    inputTelephoneNumber(){
    cy.get(" #ap_email").type('89908854456456')
    cy.get(".a-button-inner > #continue").click()
    
    }
}
export default ListCompte  = new ListCompte();


//   cy.get("[data-cel-widget=sp-cc-accept]",{timeout:40000}).should('be.visible').click()
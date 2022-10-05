class HomePage {



acceptCookie(){
    cy.get("[data-cel-widget=sp-cc-accept]",{timeout:400}).should('be.visible').click()
}
 searchWithButton(keyword) {
    cy.get("input[aria-label='Rechercher']").type(keyword)
    cy.get('#nav-search-submit-button').click()
 }

 clickAccountList(){
 cy.get("#nav-link-accountList").click()
}
}

export default HomePage = new HomePage();
// authentification.cy.js

// Sélecteurs
const weblocators = {
    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: 'input[type="checkbox"]',
    continue: '.btn.btn-primary',
    successMessage : '#content > h1'
}

// Données de test
const registerData = {
    

        "firstName":"Test",
        "lastName":"QA",
        "email":"test.qa@dispostable.com",
        "telephone":"1234567890",
        "password":"Cypress123!!",
        
        
        
}

// Cas de test
describe('account', () => {
    it('Register Flow', () => {
        // Ouvrir l'URL
        cy.visit(Cypress.env('URL'))

        // Remplir le formulaire
        cy.get(weblocators.firstName).type(registerData.firstName)
        cy.get(weblocators.lastName).type(registerData.lastName)
        cy.get(weblocators.email).type(registerData.email)
        cy.get(weblocators.telephone).type(registerData.telephone)
        cy.get(weblocators.password).type(registerData.password)
        cy.get(weblocators.passwordConfirm).type(registerData.password)
        cy.get(weblocators.policyCheckbox).check()
        cy.get(weblocators.continue).click()
         // Vérifier la visibilité de l'élément avec XPath
        cy.get(weblocators.successMessage).should('be.visible')
          

    })
})

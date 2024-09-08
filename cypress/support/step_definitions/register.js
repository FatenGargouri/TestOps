import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

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

const registerData = {
    firstName: "Test",
    lastName: "QA",
    email: "test.qa@dispostable.com",
    telephone: "1234567890",
    password: "Cypress123!!"
}

Given('que j\'ouvre la page d\'inscription', () => {
    cy.visit(Cypress.env('URL'))
})

When('je remplis le formulaire d\'inscription avec les détails nécessaires', () => {
   // Remplir le formulaire
   cy.get(weblocators.firstName).type(registerData.firstName)
   cy.get(weblocators.lastName).type(registerData.lastName)
   cy.get(weblocators.email).type(registerData.email)
   cy.get(weblocators.telephone).type(registerData.telephone)
   cy.get(weblocators.password).type(registerData.password)
   cy.get(weblocators.passwordConfirm).type(registerData.password)
   
})

When('que j\'accepte la politique de confidentialité', () => {
    cy.get(weblocators.policyCheckbox).check();
})

When('que je soumets le formulaire', () => {
    cy.get(weblocators.continue).click();
})

Then('je devrais voir le message de succès de l\'inscription', () => {
    cy.get(weblocators.successMessage).should('be.visible');
})

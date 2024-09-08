// cypress/support/step_definitions/appel_auth.js

const weblocators = {
    login: '#input-email',
    password: '#input-password',
    bouton: '#content > div > div:nth-child(2) > div > form > input',
    verification: '#menu'
}

const data = {
    login: "test.qa@dispostable.com",
    password: "Cypress123!!"
}

export function login() {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); // URL depuis la config Cypress
    cy.get(weblocators.login).type(data.login);
    cy.get(weblocators.password).type(data.password);
    cy.get(weblocators.bouton).click();
    cy.get(weblocators.verification).should('be.visible');
}

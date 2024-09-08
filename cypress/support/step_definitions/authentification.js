import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

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

Given('Je suis sur la page de connexion', () => {
  cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login') // URL depuis la config Cypress
});

When('Je saisis un email {string} et un mot de passe {string}', (email, password) => {
  cy.get(weblocators.login).type(email);
  cy.get(weblocators.password).type(password);
});

When('Je clique sur le bouton "Connexion"', () => {
  cy.get(weblocators.bouton).click();
});

Then('Je devrais être redirigé vers la page du tableau de bord', () => {
  cy.get(weblocators.verification).should('be.visible');
});

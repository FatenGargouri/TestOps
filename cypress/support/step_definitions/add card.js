import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { login } from './appel_auth.js'; // Adjust path based on directory structure
// Ensure the path is correct

const weblocators = {
    search_input: '.form-control.input-lg',
    click_search: '#search > span > button',
    addtocart: 'Add to Cart',
    successMessages: 'div.alert.alert-success.alert-dismissible'
};

const data = {
    product: {
        productName: "MacBook"
    },
    message: {
        successMessage: "Success: You have added MacBook to your shopping cart!"
    }
};

// Step Definitions

Given('que je suis connecté à l\'application', () => {
    login(); // Call the login function from appel_auth.js
});

When('je recherche un produit {string}', (productName) => {
    cy.get(weblocators.search_input).type(productName);
    cy.get(weblocators.click_search).click();
});

When('j\'ajoute le produit au panier', () => {
    cy.contains(weblocators.addtocart).first().click();
});

Then('je devrais voir un message de succès contenant {string}', (successMessage) => {
    cy.get(weblocators.successMessages)
        .should('be.visible')
        .and('contain', successMessage)
        .and('contain', data.product.productName);
});

// Export function
export const addProductToCart = (productName) => {
    cy.get(weblocators.search_input).type(productName);
    cy.get(weblocators.click_search).click();
    cy.contains(weblocators.addtocart).first().click();
};

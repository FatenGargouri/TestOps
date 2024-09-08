// remove card.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { login } from './appel_auth.js';
import { addProductToCart } from './add card.js'; // Ensure the path is correct

const weblocators = {
    view_card: '#cart',
    remove_button: '#cart > ul > li:nth-child(1) > table > tbody > tr > td:nth-child(5) > button',
    message: '#cart > ul > li > p'
};

const data = {
    message: "Your shopping cart is empty!"
};

// Given step: Login to the application
Given('que je connecte à l\'application', () => {
    login(); // Call the login function to log in
});

// When step: Add a product to the cart
When('j\'ajoute un produit au panier', () => {
    addProductToCart('MacBook'); // Call the function to add product to cart
});


// When step: Remove the product from the cart
When('je retire le produit du panier', () => {
    cy.wait(2000); // Waits for 2 seconds
    cy.get(weblocators.view_card).click(); // Click to view the cart
    cy.get(weblocators.remove_button).click(); // Click the remove button
    //cy.get(weblocators.view_card).click(); // Click to view the cart again
});

// Then step: Verify the cart is empty
Then('je devrais voir un message indiquant que le panier est vide', () => {
    cy.get(weblocators.message)
    .should('contain', data.message); // Verify that the cart is empty
});

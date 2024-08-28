//add card.cy.js
import { login } from './Authentification.cy.js'
import { addtocart } from './add card.cy.js'

// Définir les sélecteurs
const weblocators = {
    view_card  : '#cart',
    remove_button : '#cart > ul > li:nth-child(1) > table > tbody > tr > td:nth-child(5) > button',
    message : '#cart > ul > li > p'

}

const data = 
{
    message : "Your shopping cart is empty!"
}

export function removefromcard()
{
    
    cy.get(weblocators.view_card).click() // Click to view the cart
    cy.get(weblocators.remove_button).click() // Click the remove button
    cy.get(weblocators.view_card).click() // Click to view the cart again
    cy.get(weblocators.message)
            .should('contain', data.message) // Verify that the message text matches
}


describe('Remove Item from Shopping Cart', () => {
    before(() => {
        login() 
        addtocart()// Perform login before the test suite runs
    })
    
   /* it('Add a product to the cart', () => {
        addtocart() // Call the addToCart function to add the product
       
    })*/

    it('remove product from the cart', () => {
        removefromcard() // Call the addToCart function to add the product
       
    })
       
    })
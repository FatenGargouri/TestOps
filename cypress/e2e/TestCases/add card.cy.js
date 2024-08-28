//add card.cy.js
import { login } from './Authentification.cy.js'



// Définir les sélecteurs
const weblocators = {
    search_input: '.form-control.input-lg',
    click_search: '#search > span > button',
    addtocart: 'Add to Cart',
    successMessages: 'div.alert.alert-success.alert-dismissible'
}


const data = {
    login: {
      username: "test.qa@dispostable.com",
      password: "Cypress123!!"
    },
    product: {
      productName: "MacBook"
    },
    message: {
      successMessage: "Success: You have added MacBook to your shopping cart!"
    }
  }

  export function addtocart() {
 // Rechercher un produit
 cy.get(weblocators.search_input).type(data.product.productName)
 

 cy.get(weblocators.click_search).click()

 // Ajouter au panier
 cy.contains(weblocators.addtocart).first().click()

 // Vérifier le message de succès
 cy.get(weblocators.successMessages)
     .should('be.visible')
     .and('contain', data.message.successMessage)
     .and('contain', data.product.productName)
  }



describe('Test Automation', () => {
  before(() => {
    login() // Perform login before the test suite runs
})

it('Add a product to the cart', () => {
    addtocart() // Call the addToCart function to add the product
})
   
})
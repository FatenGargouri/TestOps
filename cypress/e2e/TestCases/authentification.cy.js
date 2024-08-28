// Define the selectors
const weblocators = {
    login: '#input-email',
    password: '#input-password',
    bouton: '#content > div > div:nth-child(2) > div > form > input',
    verification: '#menu'
}

// Define the data
const data = {
    login: "test.qa@dispostable.com",
    password: "Cypress123!!"
}

// Function to perform the authentication
export function login() {
    // Open the login URL
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    // Fill in the login form
    cy.get(weblocators.login).type(data.login)
    cy.get(weblocators.password).type(data.password)
    cy.get(weblocators.bouton).click()
    
    // Verify the visibility of the verification element
    cy.get(weblocators.verification).should('be.visible')
}

// Test case for authentication
describe('Authentication Test Suite', () => {
    it('should login successfully', () => {
       login()
    })
})


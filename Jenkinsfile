pipeline {
    agent {
        docker {
            image 'cypress/base:16'
            args ' '
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                // Clear Cypress cache to avoid permission issues
                // sh 'rm -rf /root/.cache/Cypress'
                sh 'npm install' // Install project dependencies
            }
        }
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests with the specified pattern
                sh 'npx cypress run --spec "cypress/e2e/TestCases/**/*.cy.js"' // Adjust the pattern if needed
            }
        }
    }
}

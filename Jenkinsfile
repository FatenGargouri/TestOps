pipeline {
    agent {
        docker {
            image 'cypress/base:16.13.0' // Update to a compatible Cypress Docker image
            args '-u root' // Run as root if necessary
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Install project dependencies
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/TestCases/**/*.cy.js"' // Adjust the pattern if needed
            }
        }
    }
}


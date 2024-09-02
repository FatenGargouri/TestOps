pipeline {
    agent {
        docker {
            image 'cypress/base:12.18.2' // Use an appropriate Cypress Docker image
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
                // Specify the path to your test cases
                sh 'npx cypress run --spec "cypress/e2e/TestCases/**/*.cy.js"' // Adjust the pattern if needed
            }
        }
    }
}

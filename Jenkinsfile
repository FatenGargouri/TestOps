pipeline {
    agent {
        docker {
            image 'cypress/base:16' // Use a compatible Cypress Docker image with Node 16
            args '-u root' // Run as root if necessary
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                // Clear Cypress cache to avoid permission issues
                sh 'rm -rf /root/.cache/Cypress'
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
    post {
        always {
            // Clean up Docker containers and images if necessary
            sh 'docker system prune -f' // Optional: clean up unused Docker resources
        }
    }
}

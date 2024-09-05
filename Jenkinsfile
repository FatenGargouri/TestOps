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
                sh 'npm install' // Install project dependencies
            }
        }
        stage('Install Cypress Binary') {
            steps {
                // Ensure the Cypress binary is installed using npx
                sh 'npx cypress install' 
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
            // Archive test results, logs, etc.
            archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**'
            junit 'cypress/results/*.xml'
        }
    }
}

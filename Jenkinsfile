pipeline {
    agent any

    tools {
        nodejs "nodejs"  // NodeJS installation configured in Jenkins
    }

    environment {
        CHROME_BIN = '/bin/google-chrome'  // Path to Chrome binary
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install necessary dependencies
                sh 'npm i'
            }
        }

        stage('Run e2e Tests') {
            steps {
                // Run all Cypress tests in the TestCases folder
                sh 'npx cypress run --headless --spec "cypress/e2e/TestCases/**/*.cy.js"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

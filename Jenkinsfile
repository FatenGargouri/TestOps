pipeline {
    agent any

    tools {
        nodejs "nodejs"  // NodeJS installation configured in Jenkins
    }

    environment {
        CHROME_BIN = '/bin/google-chrome'  // Set the Chrome binary path
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'  // Install Node.js dependencies
            }
        }

        stage('e2e Tests') {
            parallel {
                stage('Test 1') {
                    steps {
                        // Run Cypress tests located in 'cypress/e2e/TestCases/Test1'
                        sh 'npx cypress run --spec cypress/e2e/TestCases/TestCases/*'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

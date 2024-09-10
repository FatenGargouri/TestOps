pipeline {
    agent {
        docker {
            image 'cypress/base:latest' // Ensure Node.js 20.x is used
            args '--entrypoint="" -u 0:0' // Run as root
        }
    }
    stages {
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Install project dependencies
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run' // Runs Cypress tests
            }
        }
        stage('Generate Report') {
            steps {
                sh 'npx mochawesome-merge --reportDir cypress/reports > mochawesome.json'
                sh 'npx marge mochawesome.json --reportDir cypress/reports --inline'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            junit 'cypress/reports/*.xml' // Archive JUnit reports if any
        }
    }
}

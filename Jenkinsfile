pipeline {
    agent {
        docker {
            image 'cypress/included:latest' // Ensure Node.js 20.x is used
            args '--entrypoint="" -u 0:0' // Disable entrypoint and run as root user
        }
    }
    environment {
        CYPRESS_BASE_URL = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
        REPORT_DIR = 'cypress/reports'
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

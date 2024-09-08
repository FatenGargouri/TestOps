pipeline {
    agent {
        docker {
            image 'cypress/browsers:node20.10.0-chrome113-ff113' // Cypress + Node.js 20 + Browsers
            args '-u 0:0' // To run as root user, necessary for permission issues inside container
        }
    }
    environment {
        // Set environment variables if needed
        CYPRESS_BASE_URL = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
        REPORT_DIR = 'cypress/reports'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run' // This runs your Cypress tests
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
            junit 'cypress/reports/*.xml' // If you generate JUnit reports, otherwise skip this
        }
    }
}

pipeline {
    agent {
        docker {
            image 'cypress/included:13.13.3' // Use the Cypress included image
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/TestCases/**/*.cy.js"'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**'
            junit 'cypress/results/*.xml'
        }
    }
}

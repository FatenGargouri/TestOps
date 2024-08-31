pipeline {
    agent {
        docker {
            image 'cypress/included:13.13.3'  // Image Docker avec Cypress et toutes les dépendances
        }
    }

    stages {
        stage('Run e2e Tests') {
            steps {
                // Exécuter les tests Cypress en mode headless dans le conteneur Docker
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

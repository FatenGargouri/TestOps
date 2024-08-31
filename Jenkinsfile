pipeline {
    agent any

    tools {
        nodejs "nodejs"  // NodeJS installation configurée dans Jenkins
    }

    environment {
        CHROME_BIN = '/bin/google-chrome'  // Chemin du binaire Chrome
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Installer les dépendances nécessaires
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y xvfb'
                sh 'npm i'
            }
        }

        stage('Run e2e Tests') {
            steps {
                // Exécuter tous les tests Cypress dans le dossier TestCases avec Xvfb
                sh '''
                    xvfb-run -a npx cypress run --spec cypress/e2e/TestCases/**
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

pipeline {
    agent any

    environment {
        CODECOV_TOKEN = '5a4c9c04-f864-4588-9b6c-761c816146f4'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose -f docker-compose.ci.yml build'
            }
        }

        stage('Test') {
            steps {
                sh 'docker-compose -f docker-compose.ci.yml up -d'
                sh 'sleep 5'
                sh 'docker exec gestor_backend npm test'  
            }
        }

        stage('Upload to Codecov') {
            steps {
                sh '''
                  curl -Os https://uploader.codecov.io/latest/linux/codecov
                  chmod +x codecov
                  ./codecov -t $CODECOV_TOKEN
                '''
            }
        }

        stage('Apagar contenedores') {
            steps {
                sh 'sleep 5'
                sh 'docker-compose -f docker-compose.ci.yml down || true'
            }
        }
    }
}
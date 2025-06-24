pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Test') {
            steps {
                sh 'docker-compose up -d'
                sh 'sleep 5'
                sh 'docker exec gestor_backend npm test'  
            }
        }

        stage('Upload to Codecov') {
            steps {
                sh '''
                  curl -Os https://uploader.codecov.io/latest/linux/codecov
                  chmod +x codecov
                  ./codecov
                '''
            }
        }

        stage('Apagar contenedores') {
            steps {
                sh 'docker-compose down'
            }
        }
    }
}
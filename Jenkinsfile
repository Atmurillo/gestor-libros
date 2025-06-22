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
                sh 'sleep 5'  // Dar tiempo a que el backend inicie
                sh 'docker exec gestor-libros-backend-1 node tests/backend.test.js'
            }
        }
    }
}
pipeline {
    agent any

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
                  ./codecov
                '''
            }
        }
    }

    post {
        always {
            sh 'docker-compose -f docker-compose.ci.yml down'
        }
    }
}
FROM jenkins/jenkins:lts

USER root

# Instala Docker y Docker Compose
RUN apt-get update && \
    apt-get install -y docker.io docker-compose && \
    usermod -aG docker jenkins && \
    apt-get clean

USER jenkins

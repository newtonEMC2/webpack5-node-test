#!/usr/bin/env groovy

pipeline {
    // agent {
    //     docker {
    //         image 'node:lts-buster-slim'
    //         args '-p 3000:3000'
    //     }
    // }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                docker build -t webpack5test  .
                docker run --name nodejs-image-demooo -p 80:3002 --restart always -d webpack5test
                '''
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}


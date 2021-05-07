#!/usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node:14' 
            args '-p 3002:3002' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}


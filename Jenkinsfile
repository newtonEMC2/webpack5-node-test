#!/usr/bin/env groovy

pipeline {
    agent any
    
    environment {
        CI = 'true' 
    }
    stages {
        stage('test') {
            steps {
                sh '''
                docker rm -f $(docker ps -aq) | true
                docker build -t webpack5test  .
                docker run --name nodejs-image-demooo -v /var:/var -p 80:3002 --restart always -d webpack5test
                npm test
                '''
            }
        }
        // stage('buildingg') {
        //     // steps {
        //     //     echo 'building'

        //     // }
        //     // agent { 
        //     //     dockerfile {
        //     //         reuseNode true
        //     //     }
        //     // }
        //     // steps {sh 'node --version'}
        // }
        // stage('Test') { 
        //     steps {
        //         sh 'npm test' 
        //     }
        // }
    }
}
















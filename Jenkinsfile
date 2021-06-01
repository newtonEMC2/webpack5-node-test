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
                docker rm -f $(docker ps -aq)
                docker build -t webpack5test  .
                docker run --name nodejs-image-demooo -p 80:3002 --restart always -d webpack5test
                ls
                docker exec -i nodejs-image-demooo bash
                ls
                docker rm -f $(docker ps -aq)
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
















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
                docker build -t webpack5test  .
                docker run --name nodejs-image-demooo -p 80:3002 --restart always -d webpack5test
                docker exec -it webpack5test bash
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
















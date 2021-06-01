#!/usr/bin/env groovy

pipeline {
    agent none
    
    environment {
        CI = 'true' 
    }
    stages {
        stage('test') {
            agent {dockerfile true}
            steps {
                sh '''
                npm test
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
















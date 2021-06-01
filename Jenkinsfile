#!/usr/bin/env groovy



node {
    try {
        stage('Checkout'){
            checkout scm
            sh 'ls'
            sh 'whereis npm'
        }

        stage('build'){
            sh '''
            docker rm -f $(docker ps -aq) | true
            docker build -t webpack5test .
            docker run --name nodejs-image-demooo -d webpack5test
            '''
        }

        stage('Test'){

            // sh '''
            // docker rm -f $(docker ps -aq) | true
            // docker build -t webpack5test .
            // docker run --name nodejs-image-demooo -d webpack5test
            sh 'docker exec nodejs-image-demooo bash'
            sh 'npm test'
            sh 'exit'
            // npm test
            // '''

            // env.NODE_ENV = "test"

            // print "Environment will be : ${env.NODE_ENV}"

            // sh 'node -v'
            // sh 'npm prune'
            // sh 'npm install'
            // sh 'npm test'

            // sh 'docker ps'

            print "heloooooooo"

    }
    } catch(err) {
        throw err
    }
    
}
















// pipeline {
//     agent none
    
//     environment {
//         CI = 'true' 
//     }
//     stages {
//         stage('test') {
//             steps {
//                 sh '''
//                 docker rm -f $(docker ps -aq) | true
//                 docker build -t webpack5test  .
//                 docker run --name nodejs-image-demooo -p 80:3002 --restart always -d webpack5test
//                 npm test
//                 '''
//             }
//         }
//         // stage('buildingg') {
//         //     // steps {
//         //     //     echo 'building'

//         //     // }
//         //     // agent { 
//         //     //     dockerfile {
//         //     //         reuseNode true
//         //     //     }
//         //     // }
//         //     // steps {sh 'node --version'}
//         // }
//         // stage('Test') { 
//         //     steps {
//         //         sh 'npm test' 
//         //     }
//         // }
//     }
// }
















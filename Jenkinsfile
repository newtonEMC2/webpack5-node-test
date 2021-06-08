#!/usr/bin/env groovy



node {
    def testImage
    try {
        stage('Checkout'){
            checkout scm
        }

        stage('build'){
            testImage = docker.build("test-image", ".")
        }

        stage('Test'){
            sh 'docker rm -f $(docker ps -aq) | true'
            testImage.inside {
                sh 'npm test'
                sh 'exit'
            }
        }

        stage('deploy'){
            sh '''
            sshpass -p 'root' ssh -o stricthostkeychecking=no root@10.5.0.6 << EOF
            PATH="/var/run/docker.sock:$PATH"
            cd /home
            git clone https://github.com/newtonEMC2/webpack5-node-test.git webpackt
            cd webpackt
            git checkout dev
            chmod 777 -R /home
            run.sh
            docker run --name nodejs-image-demooo -p 3006:3002 --restart always -d webpack5test
            exit
            EOF
            '''
        }

        stage('Notify'){
            mail body: 'project build successful ladd',
                from: 'acorbacho@nnergix.com',
                replyTo: 'acorbacho@nnergix.com',
                subject: 'project successfully built',
                to: 'acorbacho@nnergix.com'
        }

        

    } catch(err) {
        mail body: 'project build error',
            from: 'acorbacho@nnergix.com',
            replyTo: 'acorbacho@nnergix.com',
            subject: 'project error when building',
            to: 'acorbacho@nnergix.com'

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
















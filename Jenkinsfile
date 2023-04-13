pipeline {

    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/b-l-u-e/gallery2.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/enigmatic-ocean-73989.git master'   
                }
  
            }
        }

        stage('Send message to slack') {
            steps {
                slackSend botUser: true, channel: 'winnie_ip1', message: 'The Build number is ${BUILD_ID} and URL is https://enigmatic-ocean-73989.herokuapp.com/', tokenCredentialId: 'cd705c70-2c12-4fc8-a508-4e1e9ac736e5'  }
        }
         
       
    }
}


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
         
       
    }
}


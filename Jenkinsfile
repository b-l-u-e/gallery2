pipeline {

    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
        }
        
        stage('Deploy to Heroku') {
            steps {
                echo "Deploying"
                withCredentials([usernameColonPassword(credentialsId: 'f3022483-0800-49be-9d66-73bdb711e80b', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/enigmatic-ocean-73989.git master'   
                }
  
            }
        }
         
       
    }
}


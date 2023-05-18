pipeline {
    agent any
    stages {
        stage('Limpieza y construccion del paquete') {
            steps {
                //echo "Este es el build"
                sh "mvn clean package"
            }
        }
        stage('Revisión del código') {
            steps {
                echo "Teste ejecutado correctamente"
            }
        }
        stage('SonarQube Analysis') {
            environment {
                SCANNER_HOME = tool 'SonarQube'
            }
            steps {
                withSonarQubeEnv(credentialsId: 'sonar', installationName: 'SonarQube') {
                    sh """$SCANNER_HOME/bin/sonar-scanner \\
                    -Dsonar.projectKey=l3 \\
                    -Dsonar.projectName=M3LEccion3 \\
                    -Dsonar.sources=./ \\
                    -Dsonar.java.binaries=target/classes/ """
                    
                }
            }
        }
   }
 }
}

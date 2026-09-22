pipeline {
    agent any

    environment {
        PATH = "/Users/chhairin/.nvm/versions/node/v24.14.1/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
    }

    stages {

        stage('Checkout') {
            steps {
                echo '===== Checkout Portfolio ====='
                checkout scm
            }
        }

        stage('Node Version') {
            steps {
                sh '''
                    echo "===== Node ====="
                    which node
                    node --version

                    echo "===== NPM ====="
                    which npm
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "===== Install Dependencies ====="
                    npm ci
                '''
            }
        }

        stage('Lint') {
            steps {
                sh '''
                    echo "===== ESLint ====="
                    npm run lint
                '''
            }
        }

        stage('Type Check') {
            steps {
                sh '''
                    echo "===== TypeScript Check ====="
                    npm run typecheck
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    echo "===== Vite Production Build ====="
                    npm run build
                '''
            }
        }

        stage('Deploy to Vercel') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'portfolio-vercel-token',
                        variable: 'VERCEL_TOKEN'
                    )
                ]) {
                    sh '''
                        echo "===== Deploy to Vercel ====="

                        npx vercel deploy \
                            --prod \
                            --yes \
                            --token="$VERCEL_TOKEN"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '========================================'
            echo '🎉 Portfolio CI/CD SUCCESS!'
            echo '🚀 Portfolio deployed to Vercel!'
            echo '========================================'
        }

        failure {
            echo '========================================'
            echo '❌ Portfolio CI/CD FAILED!'
            echo '========================================'
        }

        always {
            echo '===== Jenkins Portfolio Pipeline Finished ====='
        }
    }
}
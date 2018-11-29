module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'SlackOps',
      script    : 'app.js',
      instances : 'max',
      exec_mode : 'cluster',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: '3000'
      }
    },
  ],
   deploy : {
     // "production" is the environment name
     production : {
       key  : "/Users/benrabidou/Dropbox/Keys/benrabidou.pem",
       user : "ubuntu",
       host : ["slackops.rabidou.io"],
       ref  : "origin/master",
       repo : "git@github.com:brabidou/SlackOps.git",
       path : "/home/ubuntu/slackops",
       // To prepare the host by installing required software (eg: git)
       // even before the setup process starts
       // can be multiple commands separated by the character ";"
       // or path to a script on your local machine
       "pre-setup" : "",
       // Commands / path to a script on the host machine
       // This will be executed on the host after cloning the repository
       // eg: placing configurations in the shared dir etc
       "post-setup": "ls -la",
       // Commands to execute locally (on the same machine you deploy things)
       // Can be multiple commands separated by the character ";"
       "pre-deploy-local" : "echo 'This is a local executed command'",
       // Commands to be executed on the server after the repo has been cloned
       "post-deploy" : "npm install && gulp build && node ./generate_build_number && pm2 startOrRestart ecosystem.config.js --env production",
       // Environment variables that must be injected in all applications on this env
       "env"  : {
         "NODE_ENV": "development"
       }
      },
   }
};
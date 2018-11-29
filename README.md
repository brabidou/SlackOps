# SlackOps

## Configuring the server
_Successfully set up a Ubuntu 16.x server in AWS_
- Using the non root user
- Setup [NVM](https://github.com/creationix/nvm)
  - OSX: `brew install nvm`
  - Ubuntu: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
`
  - `nvm install --lts`
  - `nvm use node`
  - In the `.bashrc` file move the NVM exports to the top.
   - If they are at the bottom pm2 will not be able to run them because `.bashrc` only runs in interactive move by default.
   - Im sure there is a better way to fix this I'm just not user how.
- Install nginx with `sudo apt install nginx`
- Test that the server can connect to git with the a ssh
  - `ssh git@github.com`: should return a good connection
- Install PM2 globally with `npm install pm2 -g`

## PM2 Stuff
### Starting a new env
`pm2 deploy production setup`

### Saving PM for startup
`pm2 startup` (Follow Directions from the output of this command)

`pm2 save`

### To deploy code to env_production
`pm2 deploy production`

### To Check the process remotely or execute command remotely
`pm2 deploy production exec "pm2 list"`

### Process Commands
`pm2 show <APP_NAME>`

`pm2 remove <APP_NAME>`
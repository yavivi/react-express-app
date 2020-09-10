# React / Express App

## Step by Step Manual

### Fork Skeleton App
1. Login to your github account
2. Goto to https://github.com/yavivi/rexql-app
3. Fork the project to your github account by clicking on the "Fork" button in the upper    right corner.
Wait for the project to appear in your account
4. In the project settings, rename the repository name to your application name

### Clone and Install project libraries
```
$ git clone https://github.com/<your-github-user>/rexql-app.git <your-app-name>

Build the server:
$ cd <your-app-name>
$ npm install

Build the client:
$ cd client
$ npm install
```

### Run both Client and Server
Go back to the root directory of the project and type:
```
$ npm run all
```
This will start both server and client concurrently.
* Client (React App) is at http://localhost:3000
* Server (Express/NodeJS) is at http://localhost:3001

If you wish to start server only:
```
$ npm start
```
If you wish to start client only:
```
$ npm run client
```

## Heroku
1. Create an account in Heroku Cloud (https://signup.heroku.com)
You should verify the account by the provided email and set a new password.
You should reach the Heroku Welcome Screen at: https://dashboard.heroku.com/apps
2. Create Application and give it a name
3. In Deployment Method, choose "Connect to GitHub"
4. Click the "Connect to GitHub" button at the bottom
5. Authorize Heroku to access your repositories
6. Search your application repo and click "Connect"




VS Code
Recommended Plugins:
* install eslint plugin - find problems in your code enforces proper formatting 
* install code spell checker - finds spelling error





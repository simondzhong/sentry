# Getting Started with React Project with Sentry Integration app

This project provides supporting data to Simon's response to Sentry's SE Technical Exercise 

## Prerequisites
### Install Node.js and NPM
Navigate to https://nodejs.org/en/download/. Click the Windows Installer button to download the latest default version.
The Node.js installer includes the NPM package manager.

### Verify the installation:
```
node –v
```
```
npm –v
```

## Clone the repository
```
git clone https://github.com/simondzhong/sentry.git
```

## Navigate inside the directory
```
cd sentry
```

## Install relevant Sentry packages
```
npm install --save @sentry/react @sentry/tracing
```

## Modify the Sentry DSN
In src\App.js and srv\q1_validation.html, modify the DSN value to your DSN
```
dsn: "https://XXXXXXX@sentry.io/123",
```

## Start the app
```
npm start
```

Open src\q1_validation.html in your browser and in a text editor to review validation steps for the first question

# Installation guide

## First time
Clone your repository with `git clone` and go in your directory with the command `cd 01-find-me-a-ref-front`.

## When updating
Go in your directory switch to the dev branch with `git checkout dev`, then run the command `git pull`.

## Setup API
In your project root directory, be sure to create two files :  
### .env.develompent  
``` REACT_APP_API_URL=http://localhost:8000```
### .env.production  
```REACT_APP_API_URL= [put here the website url]```
## Install dependencies
In your directory, run the command `yarn`, it should install all the dependencies.  
If this command returns an error, then run this command instead `yarn install --ignore-engines`.

## Start the development server
Run the command `yarn start`, it should start your live server on the port 8080.  
You can then access your server on `http://localhost:8080/`.

## No datas are displayed
Make sure to start the backend server first on the port 8000.


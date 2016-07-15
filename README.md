Note: this readme is still very much a work in progress.

# Overview

This is just a pet project I put together because I wanted to experiment and learn more about the following things:

- Using React to generate dynamic SVGs
- The redux framework.
- Firebase.

## What does my stack look like?

### Frontend/Client
For the frontend I'm using the following:

- React
- Redux
- The Firebase API

### Backend

For the backend here is what I'm using:

- A Firebase Database
- A node server running on Google Compute Engine to help manage the afore mentioned database.

# Getting Up and Running

1. Clone this repo.
2. Make sure you have NPM installed.
3. In the project's root run 'npm i' (you might neeed 'sudo npm i')
4. Setup your firebase config (TODO: write more detailed guide on how to do this)
5. Configure the firebase CLI (TODO: write more detailed guide on how to do this)
6. run 'npm start'

# Test Stuff

- To run tests use 'npm test'.
- For coverage reports use 'npm run test:coverage'.

# Deploying

- To deploy run 'npm run deploy'.

# Other Relevant Repositories

- https://github.com/heathgr/hdwaf-the-count.git: This is the node server that helps manage the Firebase Database.
- https://github.com/heathgr/hdwaf-test-user-manager-cli.git: A CLI I wrote to help manage test users.
- https://github.com/heathgr/hdwaf-common-config.git: This repo is a subtree of all other hdwaf repos.  It's just a few files used to configure the project.

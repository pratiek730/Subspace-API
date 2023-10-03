# Project Name

Subspace API : A Proof od concept API project


## Introduction

A Simple API Requested as a proof of consept by Subspace on Internshala : https://internshala.com/internship/detail/backend-development-work-from-home-job-internship-at-subspace1695904463

## Features

The Features this API Provides are:

- Reading values from a specified API response : https://intent-kit-16.hasura.app/api/rest/blogs
- Filtering the API stats as requested.
- Providing searching functionality for the given response
- Optimising the data recieved using memoize as requested

## Getting Started

To get started with this project API, Please clone this repository or zip file to a project folder on your system.
Then work out with installation and then once everything is set up, you can run the project on your system.

### Prerequisites

This Project requires 
- NodeJS version : V16.14.2 or above.
- NPM version : V9.6.7 or above.

Other dependencies of this project include 

- Axios: ^1.5.1
- Express: ^4.18.2
- Lodash: ^4.17.21
- Nodemon: ^3.0.1

### Installation

download the latest stable build of Node JS from the official site and install.

`nodejs.org`

Once the files are extracted and the NodeJS has been initialized,

go to the server directory from your command prompt

`cd <location of the directory>/SubSpaceAPI/server`

run the NPM command `npm install` in the server directory

This will install all the dependencies in the directory

## Usage

Once the dependencies have been installed

run the script `npm run start` to run the API. It will start listening to requests

## API Endpoints


| Endpoint                                | Method | Description                                                                  |
| --------------------------------------- | ------ | ---------------------------------------------------------------------------- |
| `/api/blog-stats`                       | GET    | Responds with the stats of the data recieved                                 |
| `/api/blog-search?query={search}`       | GET    | responds with the Titles which include the string sent through the request   |

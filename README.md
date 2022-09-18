# Image Processing API

## Project overview

an API that can be used in two different ways.

The first use case is to place images into the font-end with the width and height set via URL parameters.
The second use case is as a library to serve properly scaled versions of the images to the front-end to reduce page load size. rather than resizeing and uploading multiple copies of the same image.

## Built with
- Node.js
- express
- TypeScript
- Sharp
- Jasmine
- Supertest
- jasmine spec reporter
- express validator

## Project setup
- clone the GitHub repo
`git clone https://github.com/M-Massoud/Image-Processing-API.git`
- install all dependencies 
`npm install `
- run the server
`npm run start`
- run tests
`npm run test`
- linting and formating
`npm run lint`
`npm run prettier`

## Endpoints
/resize/?filename=imageName&width=neededWidth&height=neededHeight

Example
`/resize/?filename=landscape.jpg&width=100&height=890`

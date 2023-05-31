# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## JS-CHALLENGIES

### Task. Concurrent Promises

Path: [/src/concurrent-promises](/src/concurrent-promises)

Write a map function that accepts 3 arguments:
  1. An array of values.
  2. An async function.
  3. An integer representing concurrency limit.

The function should map over the values from the input array (1st argument) using async function (2nd argument) with maximum number of concurrent Promises equal to concurrency limit number (3rd argument).

The function should work for any kind of values in the input array.

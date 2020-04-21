# ReactNative Unit Testing using [**JEST**](https://jestjs.io/en/)!

## **Getting started**
## About
This demo is about how you can do a unit testing of ReactNative application.

For unit testing here we are using **JEST**.

[**JEST**](https://jestjs.io/en/) is a delightful JavaScript Testing Framework.

## Installation
```
yarn install OR npm install
```
### For IOS
```
cd ios && pod install && cd ..
```
### Run app
```
react-native run-android
react-native run-ios
```

## How to perform testing?
1. In terminal go to **unittestingRN** location
2. execute `yarn test` OR `npm run test` command
3. If you want test cases feedback in IDE
   1. install **jest** plugin in your vscode
   2. Go to test file and save file
   3. It'll automatically starts the testing (for progress see bolow left corner)
   4. After successfull test you will see right tick icon
   5. test files are looks like **filename.test.js**

## **About testing**
This demo project contains some pre written test cases. You can find them in **\_\_tests\_\_** folder.

In this performed tests are:
* Functional component
* Class based component
* Actions
* Reducer state
* Saga functions
* API's success and Failure cases

## Some helper links
* Enzyme
  * https://enzymejs.github.io/enzyme/
  * https://github.com/enzymejs/enzyme#installation
* Sinon 
  * https://sinonjs.org/
* Chai
  * https://www.chaijs.com/api/bdd/
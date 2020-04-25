# ReactNative project using TypeScript for advance type safe!

## **Getting started**
## About
This demo is about how to migrate from javascript to [**typescript**](https://www.typescriptlang.org/) OR how to integrate typescript language support in ReactNative project
* TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

# Demo preview
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

# Unit testing
## How to perform testing?
1. In terminal go to project location
2. execute `yarn test` OR `npm run test` command
3. If you want test cases feedback in IDE
   1. install **jest** plugin in your vscode
   2. Go to test file and save file
   3. It'll automatically starts the testing (for progress see bolow left corner)
   4. After successfull test you will see right tick icon
   5. test files are looks like **filename.test.ts**

## **About testing**
This demo project contains some pre written test cases. You can find them in **\_\_tests\_\_** folder.

List of testing:
* Functional component
* Class based component
* Actions
* Reducer
* Saga functions
* APIs testing
* Store testing
* More soon...

# TypeScript Integration
1. Add dependencies ~> `yarn add --dev typescript react-native-typescript-transformer @types/react @types/react-native`
2. Init typescript ~> `yarn tsc --init --pretty --jsx react` it will create `tsconfig.json` file
3. Make cli config file ~> `touch rn-cli.config.js` or manually create rn-cli.config.js file in root
4. Uncomment below line in `tsconfig.json` file
   * `// "allowSyntheticDefaultImports": true,`
5. Copy below code in `rn-cli.config.js`
   * ```
     module.exports = {
        getTransformModulePath() {
            return require.resolve('react-native-typescript-transformer');
        },
        getSourceExts() {
            return ['ts', 'tsx'];
        },
     };
     ```
6. Add converter library ~> `yarn add --dev js-to-ts-converter` | [Reference](https://github.com/gregjacobs/js-to-ts-converter)
7. Run command in terminal ~> `js-to-ts-converter ./path_of_your_src_folder`
8. Done!
9. After this you will see error in your all components file, to resolve error refer this demo project's file
10. TSLint & Prettier configuration | [Link](https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2)

## Reference
1. https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native
2. https://reactnative.dev/docs/typescript
3. https://www.typescriptlang.org/

<!-- ## **Getting started**
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
  * https://www.chaijs.com/api/bdd/ -->
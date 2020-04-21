import React, { Fragment } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// =======>>>>>>>> ASSETS <<<<<<<<=======
import AppNavigation from './src/AppNavigation';
import { store, persistor } from './src/Redux/Store';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Fragment>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <StatusBar barStyle='light-content' backgroundColor='white'/>
              <AppNavigation/>
            </PersistGate>
          </Provider>
        </Fragment>
      </>
    )
  }
}
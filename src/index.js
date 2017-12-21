import { AppRegistry } from 'react-native';
import Router from './routes/Router'
import AppRoute from './AppRoute';

import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from './configureStore'

const store = configureStore()

const storeApp = () => (
    <Provider store={store}>
        <AppRoute 
            ref={navigationRef => {
                Router.setNavigation(navigationRef)
            }}
        />
    </Provider>
)

AppRegistry.registerComponent('AwesomeMusic', () => storeApp);
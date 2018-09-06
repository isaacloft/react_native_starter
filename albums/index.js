/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

const App = () => (<Header />);

AppRegistry.registerComponent('albums', () => App);

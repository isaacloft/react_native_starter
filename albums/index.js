/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/** @format */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('albums', () => App);

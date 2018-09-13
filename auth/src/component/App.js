import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header.js';

class App extends Component {
	render() {
		return (
			<View>
				<Header />
				<Text> App home </Text>
			</View>
		);
	}
}

export default App;

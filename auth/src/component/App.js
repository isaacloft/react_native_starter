import firebase from 'firebase';
import LoginForm from './LoginForm';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common/';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBBw6nEW_c8tneTqci7dUlCRrzrKcDOBkk',
			authDomain: 'auth-c0130.firebaseapp.com',
			databaseURL: 'https://auth-c0130.firebaseio.com',
			projectId: 'auth-c0130',
			storageBucket: 'auth-c0130.appspot.com',
			messagingSenderId: '232089854608'
		});
	}
	render() {
		return (
			<View>
				<Header />

				<LoginForm />
			</View>
		);
	}
}

export default App;

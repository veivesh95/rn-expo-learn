import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

const styles = StyleSheet.create({
	testContainer: {
		paddingTop: 20,
		textAlign: 'center',
		fontFamily: Fonts.codeFont
	}
});

export default class TestScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static navigationOptions = {
		title: 'Test Page'
	};

	render() {
		return (
			<View>
				<Text style={styles.testContainer}>This a test context</Text>
			</View>
		);
	}
}

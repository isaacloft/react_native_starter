import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image } = album;

	return (
		<Card>
			<CardSection>
				<View>
					<Image
						style={styles.cardThumbNail}
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={styles.cardTextSection}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	cardTextSection: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10
	},
	cardThumbNail: {
		width: 50,
		height: 50
	}
};

export default AlbumDetail;

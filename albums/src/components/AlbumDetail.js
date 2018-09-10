import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image } = album;
	const {
		cardTextSection,
		cardThumbNail,
		imageStyle,
		headerTextStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View>
					<Image
						style={cardThumbNail}
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={cardTextSection}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>
			
			<CardSection>
				<Button />
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
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	headerTextStyle: {
		fontSize: 18,
		fontWeight: '600'
	}
};

export default AlbumDetail;

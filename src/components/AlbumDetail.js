import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // deconstruct children of props/album even further
    const {
            title,
            artist,
            thumbnail_image,
            image,
            url
    } = album;
    // deconstruct styles too
    const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            albumImageStyle
    } = styles;

    return (
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={albumImageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onButtonPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
};

export default AlbumDetail;

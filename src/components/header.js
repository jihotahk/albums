// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component - a function with same name as file
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#eeeeee'
    },

    textStyle: {
        fontSize: 100
    }
};

// Make the component available to other parts of the App
export default Header;

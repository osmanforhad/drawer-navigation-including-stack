import { Button, Text, View } from 'react-native';
import React from 'react';
import HomeScreenStyle from '../styles/HomeScrrenStyle';

const HomeScreen = (props) => {
    return (
        <View style={HomeScreenStyle.viewStyle}>
            <Text style={HomeScreenStyle.headingStyle}>React Navigation</Text>
            <Text style={HomeScreenStyle.textStyle}>This is Home Screen</Text>
            <Button title='Profile' onPress={() => props.navigation.navigate("Profile", {
                name: "osman forhad"
            })} />
        </View>
    )
};

export default HomeScreen;
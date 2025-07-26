import { Button, Text, View } from 'react-native';
import React from 'react';
import ProfileScreenStyle from '../styles/ProfileScreenStyle';

const ProfileScreen = (props) => {
    return (
        <View style={ProfileScreenStyle.viewStyle}>
            <Text style={ProfileScreenStyle.textStyle}>Profile Screen</Text>
            <Button title='User' onPress={() => props.navigation.navigate("User")} />
        </View>
    )
};

export default ProfileScreen;
import { Text, View } from 'react-native';
import React from 'react';
import UserScreenStyle from '../styles/UserScreenStyle';

const UserScreen = () => {
    return (
        <View style={UserScreenStyle.viewStyle}>
            <Text style={UserScreenStyle.textStyle}>This is User Screen</Text>
        </View>
    )
};

export default UserScreen;
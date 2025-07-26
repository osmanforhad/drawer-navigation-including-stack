import 'react-native-gesture-handler';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import UserScreen from './screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from './components/DrawerContent';

const StackNavigation = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            statusBarStyle: 'orange',
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                headerLeft: () => {
                    return (
                        <Icon
                            name="menu"
                            size={30}
                            color="#fff"
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    );
                }
            }} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='User' component={UserScreen} />
        </Stack.Navigator>
    );
};

const DrawerNavigation = () => {

    const DRAWER = createDrawerNavigator();

    return (
        <DRAWER.Navigator drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            <DRAWER.Screen name='Home' component={StackNavigation} />
        </DRAWER.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default App
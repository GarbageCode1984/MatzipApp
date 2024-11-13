import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '@/screens/auth/AuthHomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import {authNavigations} from '@/constants/navigations';
import SignupScreen from '@/screens/auth/SignupScreen';

export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SINGUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white',
                },
                headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'gray',
                },
                headerTitleStyle: {
                    backgroundColor: 'white',
                    fontSize: 15,
                },
                headerTintColor: 'black',
            }}>
            <Stack.Screen
                name={authNavigations.AUTH_HOME}
                component={AuthHomeScreen}
                options={{
                    headerTitle: ' ',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={authNavigations.LOGIN}
                component={LoginScreen}
                options={{
                    headerTitle: '로그인',
                }}
            />
            <Stack.Screen
                name={authNavigations.SINGUP}
                component={SignupScreen}
                options={{
                    headerTitle: '회원가입',
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;

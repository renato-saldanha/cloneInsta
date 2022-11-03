import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const TabPrincipal = createBottomTabNavigator();
const StackAuthOrProfile = createNativeStackNavigator();
const StackAuth = createNativeStackNavigator();

const icons = {
  Feed: 'home',
  AddPhoto: 'camera',
  AuthOrProfile: 'user',
};

export default props => {
  // const {email} = getUser();
  const email = '';

  const Auth = () => (
    <StackAuth.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <StackAuth.Screen name="Login" component={Login} />
      <StackAuth.Screen name="Register" component={Register} />
    </StackAuth.Navigator>
  );

  const AuthOrProfile = () => (
    <StackAuthOrProfile.Navigator
      initialRouteName={email ? 'Profile' : 'Auth'}
      screenOptions={({route}) => ({headerShown: false})}>
      <StackAuthOrProfile.Screen name="Profile" component={Profile} />
      <StackAuthOrProfile.Screen name="Auth" component={Auth} />
    </StackAuthOrProfile.Navigator>
  );

  return (
    <NavigationContainer>
      <TabPrincipal.Navigator
        initialRouteName="Feed"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({tintColor, size}) => {
            return (
              <Icon name={icons[route.name]} size={size} color={tintColor} />
            );
          },
        })}>
        <TabPrincipal.Screen name="Feed" component={Feed} />
        <TabPrincipal.Screen name="AddPhoto" component={AddPhoto} />
        <TabPrincipal.Screen name="AuthOrProfile" component={AuthOrProfile} />
      </TabPrincipal.Navigator>
    </NavigationContainer>
  );
};

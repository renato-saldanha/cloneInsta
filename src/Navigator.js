import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';

const TabPrincipal = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FeedScreen() {
  return (
    <View>
      <Feed />
    </View>
  );
}

function AddPhotoScreen() {
  return (
    <View>
      <AddPhoto />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Profile />
    </View>
  );
}

function LoginScreen() {
  return (
    <View>
      <Login />
    </View>
  );
}

function ProfileOrLogoutScreen() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <TabPrincipal.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => {
          const icons = {
            Feed: 'home',
            AddPhoto: 'camera',
            ProfileOrLogoutScreen: 'user',
          };

          return <Icon name={icons[route.name]} size={30} color={color} />;
        },
      })}>
      <TabPrincipal.Screen name="Feed" component={FeedScreen} />
      <TabPrincipal.Screen name="AddPhoto" component={AddPhotoScreen} />
      <TabPrincipal.Screen
        name="ProfileOrLogoutScreen"
        component={ProfileOrLogoutScreen}
      />
    </TabPrincipal.Navigator>
  );
}

export default function NavigatorMenu() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

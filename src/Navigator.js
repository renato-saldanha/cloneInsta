import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';

const Tab = createBottomTabNavigator();

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
      <Text>Profile</Text>
    </View>
  );
}

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => {
          const icons = {
            Feed: 'home',
            AddPhoto: 'camera',
            Profile: 'user',
          };

          return <Icon name={icons[route.name]} size={30} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{title: 'Feed'}}
      />
      <Tab.Screen
        name="AddPhoto"
        component={AddPhotoScreen}
        options={{title: 'Add'}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function NavigatorMenu() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

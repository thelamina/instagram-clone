import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FoundationIcons from 'react-native-vector-icons/Foundation';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

import HomeStackScreen from '../routes/home.routes'
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <FoundationIcons name="home" size={size} color={color} />;
          }
          if (route.name === 'Discover') {
            return <FeatherIcons name="search" size={size} color={color} />;
          }
          if (route.name === 'Post') {
            return (
              <FeatherIcons name="plus-square" size={size} color={color} />
            );
          }
          if (route.name === 'Notifications') {
            return <AntIcons name="hearto" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <AntIcons name="user" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discover" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Routes;

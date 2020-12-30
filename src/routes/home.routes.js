import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitleAlign:'center',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },

          headerLeft: () => (
            <FeatherIcons name="camera" size={25} color={'#000'} />
          ),
          headerTitle: () => (
            <Image source={logo} style={{width: 120}} resizeMode="contain" />
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;

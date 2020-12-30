import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: 'pink', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 300,
          fontSize: 30,
          color: 'white',
        }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;

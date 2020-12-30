import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => {
  return (
    <Image source={{uri: imageUri}} style={styles.image} resizeMode="cover" />
  );
};

export default Body;

import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles'

const data = [
  {
    imageUri:
      'https://images.unsplash.com/photo-1608585269273-5cacd36870f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
    name: 'Petra',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=426&q=80',
    name: 'Dami',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1588000582052-ac2e7660b6f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    name: 'Mika',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1608049429989-ce05a0c5e15c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    name: 'Saun',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1603135801000-ca5345e39bdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    name: 'Daniil',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1608106875849-d116853ffb51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    name: 'Laden',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;

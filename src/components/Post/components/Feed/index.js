import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../..';
import Stories from '../../../Stories';

const data = [
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1608585269273-5cacd36870f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
      name: 'Petra',
    },
    imageUri:
      'https://images.unsplash.com/photo-1523673671576-35ff54e94bae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    caption: 'My fav #beautiful',
    likesCount: 232,
    postedAt: '5 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=426&q=80',
      name: 'Dami',
    },
    imageUri:
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    caption: 'My fav #beautiful',
    likesCount: 232,
    postedAt: '5 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1603135801000-ca5345e39bdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      name: 'Daniil',
    },
    imageUri:
      'https://images.unsplash.com/photo-1499309221416-e18ee3411c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    caption: 'My fav #beautiful',
    likesCount: 232,
    postedAt: '5 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      keyExtractor={({user}) => user.name}
      data={data}
      ListHeaderComponent={Stories}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;

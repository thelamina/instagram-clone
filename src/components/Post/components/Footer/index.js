import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/Fontisto';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FABIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, postedAt, caption}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : +1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <AntIcon name="heart" size={25} color="#c30000" />
            ) : (
              <AntIcon name="hearto" size={25} color="#545454" />
            )}
          </TouchableWithoutFeedback>
          <FontIcon name="comment" size={23} color="#545454" />
          <Ionicon name="paper-plane-outline" size={25} color="#545454" />
        </View>
        <FABIcon name="bookmark-o" size={25} color="#545454" />
      </View>
      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

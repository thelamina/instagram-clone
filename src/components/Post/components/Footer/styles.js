import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },

  leftIcons: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likes: {
    fontWeight: 'bold',
    margin: 3,
  },

  caption: {
    margin: 3,
  },

  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});

export default styles;

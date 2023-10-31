import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, onStarPress }) => {
  const starIcons = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {starIcons.map((star, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onStarPress(star)}
          style={styles.starContainer}
        >
          <Icon
            name={star <= rating ? 'star' : 'star-o'}
            size={30}
            color="gold"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    margin: 5,
  },
});

export default StarRating;

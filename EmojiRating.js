import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmojiRating = ({ selectedRating, onRatingPress }) => {
  const emojiData = [
    { emoji: '😡', rating: 'muito ruim' },
    { emoji: '😕', rating: 'ruim' },
    { emoji: '😐', rating: 'regular' },
    { emoji: '😊', rating: 'bom' },
    { emoji: '😄', rating: 'muito bom' },
  ];

  return (
    <View style={styles.container}>
      {emojiData.map((emojiItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onRatingPress(emojiItem.rating)}
          style={styles.emojiContainer}
        >
          <Text style={styles.emojiText}>{emojiItem.emoji}</Text>
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
  emojiContainer: {
    margin: 10,
  },
  emojiText: {
    fontSize: 36,
  },
});

export default EmojiRating;

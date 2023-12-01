import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const EmojiButton = ({ emoji, rating, color, buttonText, onPress, buttonWidth }) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onPress(rating)} style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{emoji}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress(rating)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.button, { backgroundColor: pressed ? '#d3d3d3' : color, width: buttonWidth }]}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmojiAvaliacao = ({ onRatingPress }) => {
  const emojiData = [
    { emoji: '😄', rating: 5, color: '#8FDF67', buttonText: 'Muito bom' },
    { emoji: '😊', rating: 4, color: '#FFFF00', buttonText: 'Bom' },
    { emoji: '😐', rating: 3, color: '#FFD700', buttonText: 'Regular' },
    { emoji: '😕', rating: 2, color: '#FF6347', buttonText: 'Ruim' },
    { emoji: '😡', rating: 1, color: '#FF0000', buttonText: 'Muito ruim' },
  ];

  const maxButtonWidth = Math.max(
    ...emojiData.map(item => {
      const textWidth = item.buttonText.length * 30; // Estimativa da largura do texto
      return textWidth + 40; // Adicionando margens e espaçamento do emoji
    })
  );

  return (
    <View style={styles.container}>
      {emojiData.map((emojiItem, index) => (
        <EmojiButton
          key={index}
          emoji={emojiItem.emoji}
          rating={emojiItem.rating}
          color={emojiItem.color}
          buttonText={emojiItem.buttonText}
          onPress={onRatingPress}
          buttonWidth={maxButtonWidth}
        />
      ))}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: windowWidth * -0.075,
    marginTop: windowHeight * 0.025,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.04,
  },
  button: {
    borderRadius: windowWidth * 0.03,
    alignItems: 'center',
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: 10, // Adapte conforme necessário
    marginRight: windowWidth * 0.02,
  },
  emojiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth * 0.02,
  },
  emojiText: {
    fontSize: windowWidth * 0.04,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.03,
  },
});

export default EmojiAvaliacao;

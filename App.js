import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Avalie o Atendimento</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.ratingButton, rating === value && styles.selectedRating]}
            onPress={() => handleRating(value)}
          >
            <Text>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.selectedRatingText}>Sua avaliação: {rating || 'Nenhuma'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  selectedRating: {
    borderColor: 'blue',
  },
  selectedRatingText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;

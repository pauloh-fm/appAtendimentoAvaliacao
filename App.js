import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import StarRating from './startRating';
import FerramentalLogo from './Ferramental_logo.png';

const App = () => {
  const [rating, setRating] = useState(0);
  const dimensions = useWindowDimensions();

  useEffect(() => {
    const isLandscape = dimensions.width > dimensions.height;

    // Verifique a orientação e atualize o estilo conforme necessário
    // Exemplo: definir o estilo do container com flexDirection: 'row' no modo paisagem
  }, [dimensions]);

  const handleStarPress = (star) => {
    setRating(star);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={FerramentalLogo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Obrigado pela preferência</Text>
        <Text style={styles.ratingText}>Por favor, avalie nosso atendimento:</Text>
      </View>
      <StarRating rating={rating} onStarPress={handleStarPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  logo: {
    width: 206,
    height: 206,
  },
});

export default App;

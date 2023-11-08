import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import FerramentalLogo from './Ferramental_logo.png';
import enviarAvaliacao from './enviarRequisicao';

const App = () => {
  const [rating, setRating] = useState(null);
  const dimensions = useWindowDimensions();

  useEffect(() => {
    const isLandscape = dimensions.width > dimensions.height;

    // Verifique a orientação e atualize o estilo conforme necessário
  }, [dimensions]);

  const handleRatingPress = (ratingValue) => {
    enviarAvaliacao(ratingValue) // Envie a avaliação para o backend
      .then((response) => {
        // feedback backend
        console.log('Avaliação enviada com sucesso:', response.data);
      })
      .catch((error) => {
        // Lógica para lidar com erros na chamada para o backend
        console.error('Erro ao enviar a avaliação:', error);
      });

    setRating(ratingValue);
  };

  const renderEmojis = () => {
    const emojiSize = dimensions.width * 0.1; // Tamanho menor dos emojis

    return (
      <View style={styles.emojiContainer}>
        <TouchableOpacity onPress={() => handleRatingPress('muito ruim')}>
          <Text style={{ fontSize: emojiSize }}>😡</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRatingPress('ruim')}>
          <Text style={{ fontSize: emojiSize }}>😕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRatingPress('regular')}>
          <Text style={{ fontSize: emojiSize }}>😐</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRatingPress('bom')}>
          <Text style={{ fontSize: emojiSize }}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRatingPress('muito bom')}>
          <Text style={{ fontSize: emojiSize }}>😄</Text>
        </TouchableOpacity>
      </View>
    );
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
      {renderEmojis()}
      {rating && <Text style={styles.selectedRating}>Sua avaliação: {rating}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    color: 'black',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedRating: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  logo: {
    width: 206,
    height: 206,
  },
});

export default App;

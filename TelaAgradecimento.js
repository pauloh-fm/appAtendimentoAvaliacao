import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TelaAgradecimento = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirecione para a tela inicial após 5 segundos
      navigation.replace('Home');
    }, 5000);

    // Limpe o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./Ferramental_logo.png')} style={styles.logo} />
      <Text style={styles.mensagem}>Obrigado pela avaliação</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E7FA',
  },
  logo: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    resizeMode: 'contain',
    marginBottom: windowHeight * 0.05,
  },
  mensagem: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TelaAgradecimento;

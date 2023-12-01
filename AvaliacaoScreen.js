import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import EmojiAvaliacao from './EmojiAvaliacao';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AvaliacaoScreen = () => {
  const vendedorInfo = {
    nome: 'Gustavo',
    imagem: 'http://ferramental.ddns.net:5123/files/gustavo.png', // Substitua pela URL real da imagem do vendedor
  };

  useEffect(() => {
    // Lógica de inicialização, se necessário
  }, []);

  const handleEmojiPress = (rating) => {
    // Lógica para lidar com o clique do emoji
    console.log('Emoji clicado:', rating);
    // Envie a avaliação para o backend ou faça qualquer outra lógica necessária
  };

  return (
    <View style={styles.container}>
      {/* Parte esquerda da tela */}
      <View style={styles.leftContainer}>
        <View style={styles.card}>
          <Text style={styles.vendedorNome}>{`Avalie o vendedor ${vendedorInfo.nome}`}</Text>
          <View style={styles.imagemContainer}>
            <Image source={{ uri: vendedorInfo.imagem }} style={styles.vendedorImagem} />
          </View>
        </View>
      </View>

      {/* Parte direita da tela */}
      <ScrollView contentContainerStyle={styles.rightContainer} horizontal={false}>
        {/* Adicione o componente EmojiAvaliacao aqui */}
        <EmojiAvaliacao onRatingPress={handleEmojiPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E2E7FA',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E7FA',
    marginLeft: windowWidth * 0.075,
    marginTop: windowHeight * 0.15,
  },
  card: {
    borderWidth: 2,
    borderColor: '#0B0464',
    borderRadius: windowWidth * 0.05,
    padding: windowWidth * 0.01,
    alignItems: 'center',
    marginLeft: windowWidth * 0.10,
    marginTop: windowHeight * 0.15,
    marginBottom: windowHeight * 0.1,
  },

  imagemContainer: {
    overflow: 'hidden',
    borderRadius: windowWidth * 0.025, // Opcional: adicione borda arredondada
    alignItems: 'flex-start', // Alinhe a imagem à parte superior do contêiner
    marginTop: windowHeight * 0.02,
  },
  vendedorImagem: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.36,
    resizeMode: 'cover',
  },
  vendedorNome: {
    color: 'black',
    fontSize: windowWidth * 0.015,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: windowHeight * -0.1,
  },
});

export default AvaliacaoScreen;
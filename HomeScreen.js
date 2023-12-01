// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FerramentalLogo from './Ferramental_logo.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={FerramentalLogo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Ferramental Máquinas</Text>
      </View>
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
  logo: {
    width: 206,
    height: 206,
  },
});

export default HomeScreen;

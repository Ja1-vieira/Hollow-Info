import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  cardContainer,
  Image,
  ImageBackground
} from 'react-native';

export default class HollowKnightScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/img.png')}
          style={styles.backgroundImage}>
        <View style={styles.cardContainer}>
            <Text style={styles.nameText}>Hollow Knight</Text>
          <Image
            source={require('../assets/HollowKnightIdle.png')}
            style={styles.postImage}
          />
        </View>
        <View style={styles.nameText}>
          <Text style={styles.descriptionText}>Hollow Knight é um dos receptáculos criado pelo Rei Pálido, ele foi o primeiro receptáculo puro, apto a ser um receptáculo do vazio, porém ele foi escolhido pelo Rei para uma outra função, reter a Radiância e salvar Hollownest da infecção.</Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 45,
    color: '#e68758',
    fontWeight: 'bold'
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: 355,
    alignSelf: 'center',
    height: 350,
  },
  descriptionText: {
    paddingTop: 10,
    color: '#e68758',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
});

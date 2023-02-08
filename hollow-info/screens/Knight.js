import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  cardContainer,
  Image,
  ImageBackground,
} from 'react-native';

export default class KnightScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/img.png')}
          style={styles.backgroundImage}>
          <View style={styles.cardContainer}>
            <Text style={styles.nameText}>Knight</Text>
            <Image
              source={require('../assets/KnightIdle.png')}
              style={styles.postImage}
            />
          </View>
          <View style={styles.nameText}>
            <Text style={styles.descriptionText}>Knight, assim apelidado pela comunidade, é o protagonista de Hollow Knight e o único personagem jogável. Ele é um dos receptáculos descartados pelo Rei Pálido que conseguiu voltar do Abismo. Knight foi criado pelo Rei Pálido, assim como Hornet os tornando meio-irmãos, e pela Dama Branca e assim como seus irmãos receptáculos, não têm gênero específico. </Text>
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
    marginTop: 10,
    fontSize: 45,
    color: 'black',
    fontWeight: 'bold'
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: 105,
    alignSelf: 'center',
    height: 200,
  },
  descriptionText: {
    paddingTop: 10,
    color: 'black',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

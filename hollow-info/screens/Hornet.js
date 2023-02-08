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

export default class HornetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/img.png')}
          style={styles.backgroundImage}>
        <View style={styles.cardContainer}>
            <Text style={styles.nameText}>Hornet</Text>
          <Image
            source={require('../assets/HornetIdle.png')}
            style={styles.postImage}
          />
        </View>
        <View style={styles.nameText}>
          <Text style={styles.descriptionText}>Hornet é uma misteriosa protetora das ruínas de Hollownest e protagonista de Silksong, ela é uma boss em Hollow Knight, porta uma agulha e é extremamente ágil. Ela é meia-irmã de Knight, sendo filha do Rei Pálido e Herrah. Na sua infância ela viu o reino caindo aos pedaços pela radiação e quando cresceu ficou como protetora do que sobrou. </Text>
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
    color: '#794149',
    fontWeight: 'bold'
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: 175,
    alignSelf: 'center',
    height: 300,
  },
  descriptionText: {
    paddingTop: 10,
    color: '#794149',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
});

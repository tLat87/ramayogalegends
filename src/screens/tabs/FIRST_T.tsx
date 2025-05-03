import React from "react";
import {View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {SCREENS} from '../../utils/constants';
import StoryScreen2 from '../StoryScreen2.tsx';

const FIRST_T_SCREEN = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen1, {type: 'Asanas'})}}>
        <ImageBackground
          source={require('../../assets/img/b2bcf36f2d377f3f490522cecf110776c61c2de1.png')}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Main Episodes</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen2, {type: 'Pranayamas'})}}>
        <ImageBackground
            source={require('../../assets/img/cc082724070dc29ca75dba6f85095ed71bd5146a.png')} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Biographies of Main Characters</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen3, {type: 'Meditation'} )}}>
        <ImageBackground
            source={require('../../assets/img/e3aca12fdc494af4d0ab3ff95847962a9c931e28.png')}// Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Analysis of Philosophical and Spiritual Aspects</Text>
        </ImageBackground>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#000",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 24
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Растягиваем по всему View
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемняем
    borderRadius: 24, // Скругляем углы
  },
  text: {
    position: "absolute",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FIRST_T_SCREEN;

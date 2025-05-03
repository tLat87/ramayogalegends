import React from "react";
import {View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {SCREENS} from '../../utils/constants';

const SECOND_T = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Asanas'})}}>
        <ImageBackground
          source={require('../../assets/img/5/5d3d5e96a3d33b28d0e9cba5379ac7a40f867b51.png')} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Asanas</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Pranayamas'})}}>
        <ImageBackground
            source={require('../../assets/img/5/fc479a0cdbd03552a4821867d70cb955280bf7d4.png')} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Pranayamas</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Meditation'} )}}>
        <ImageBackground
            source={require('../../assets/img/5/e6681615ce30d7326dc17a041916adf54a940d13.png')} // Тут можешь вставить свою картинку
            // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Meditation</Text>
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


export default SECOND_T;

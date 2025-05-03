import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

import { SCREENS } from '../utils/constants';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';

const StartScreen = ({ navigation }) => {
  return (
      <View
        style={{backgroundColor: '#000', flex: 1, justifyContent: 'space-around'}}
      >
          <Text style={{color: '#fff', alignSelf: 'center', fontSize: 30, fontWeight: 'bold',}}>
            Rama Yoga Legends
          </Text>

        <Image source={require('../assets/img/arrow.png')} style={{ width: '40%', height: '25%', alignSelf: 'center'}} />
        <CustomSpesBtn title='Start' onPress={() => navigation.navigate(SCREENS.BottomRouter)} />
      </View>
  );
};


export default StartScreen;

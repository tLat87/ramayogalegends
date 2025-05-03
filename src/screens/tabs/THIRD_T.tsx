import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MailSvg from '../../assets/svg/MailSvg.tsx';
import {SCREENS} from '../../utils/constants';

const THIRD_T = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000', padding: 24, alignItems: 'center'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.GameScreen, {level: 'easy'})}} style={{backgroundColor: '#252525', marginBottom: 24 ,width: '100%',alignItems: 'center',flexDirection: 'column', height: 100,justifyContent: 'center', borderRadius: 24}}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
          Easy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.GameScreen, {level: 'medium'})}} style={{backgroundColor: '#252525', marginBottom: 24, width: '100%',alignItems: 'center',flexDirection: 'column', height: 100,justifyContent: 'center', borderRadius: 24}}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
          Medium
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.GameScreen, {level: 'hard'})}} style={{backgroundColor: '#252525', marginBottom: 24, width: '100%',alignItems: 'center',flexDirection: 'column', height: 100,justifyContent: 'center', borderRadius: 24}}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
          Hard
        </Text>
      </TouchableOpacity>
      <Image source={require('../../assets/img/arrow.png')} style={{ width: '40%', height: '32%', marginBottom: 20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default THIRD_T;

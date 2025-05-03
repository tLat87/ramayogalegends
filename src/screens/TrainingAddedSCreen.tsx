import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import {SCREENS} from '../utils/constants';
import React, {useState} from 'react';
import CalendarSvg from '../assets/svg/CalendarSvg.tsx';
import TimeSvg from '../assets/svg/TimeSvg.tsx';

const TrainingAddedSCreen = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 16, justifyContent: 'center'}}>
      <Text style={{color: "#fff", alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>
        Training is added!
      </Text>
      <Image source={require('../assets/img/ix_success-filled.png')} style={{ width: 130, height: 130, alignSelf: 'center' }} />

      <View style={{width:'100%', height:130, backgroundColor:'#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30}}>
        <CustomSpesBtn title='Close' onPress={() => {navigation.pop(3)}}/>
      </View>
    </View>
  )
}

export default TrainingAddedSCreen;

import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import {SCREENS} from '../utils/constants';
import React, {useState} from 'react';
import CalendarSvg from '../assets/svg/CalendarSvg.tsx';
import TimeSvg from '../assets/svg/TimeSvg.tsx';

const UWinScreen = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 16, justifyContent: 'center'}}>
      <Text style={{color: "#fff", alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>
        You win!
      </Text>
      <Image source={require('../assets/img/grayArr.png')} style={{ width: 130, height: 130, position: 'absolute', top: 30, left: 100 }} />
      <Image source={require('../assets/img/grayArr.png')} style={{ width: 130, height: 130, position: 'absolute', top: 190, left: 10 }} />
      <Image source={require('../assets/img/grayArr.png')} style={{ width: 130, height: 130, position: 'absolute', top: 410, left: 20 }} />
      <Image source={require('../assets/img/grayArr.png')} style={{ width: 130, height: 130, position: 'absolute', bottom: 180, right: 10 }} />
      <Image source={require('../assets/img/grayArr.png')} style={{ width: 130, height: 130, position: 'absolute', bottom: 500, right: 30 }} />



      <Image source={require('../assets/img/ix_success-filled.png')} style={{ width: 130, height: 130, alignSelf: 'center' }} />

      <View style={{width:'100%', height:130, backgroundColor:'#000', position: 'absolute', bottom: 0, paddingTop: 30}}>
        <CustomSpesBtn title='Close' onPress={() => {navigation.pop(2)}}/>
      </View>
    </View>
  )
}

export default UWinScreen;

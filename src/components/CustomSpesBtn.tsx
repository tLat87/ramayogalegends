import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomSpesBtn = ({title, onPress, disabled = false}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[{backgroundColor: '#FFDC00', justifyContent: "center", alignItems: "center", width: '90%', paddingVertical: 16, alignSelf: 'center', borderRadius: 99}, disabled && {backgroundColor: 'gray'}]}>
      <Text style={{fontSize: 16, fontWeight: "bold", color: "#000"}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomSpesBtn;

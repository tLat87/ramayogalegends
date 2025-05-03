import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import WebSvg from '../../assets/svg/WebSvg.tsx';
import MailSvg from '../../assets/svg/MailSvg.tsx';
import ShieldSvg from '../../assets/svg/ShieldSvg.tsx';

const ZFOURTH = () => {
  return (
   <View style={{flex: 1, backgroundColor: '#000',  alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between'}}>

     <View>
       <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20}}>
         <View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>
           <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>
             Developer Website
           </Text>
           <WebSvg/>
         </View>
         <View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>
           <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>
             Terms of use
           </Text>
           <MailSvg/>
         </View>
       </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20}}>
         <View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>
           <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>
             Privacy Policy
           </Text>
           <ShieldSvg/>
         </View>
         <View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>
           <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>
             Notifications
           </Text>
           <WebSvg/>
         </View>
       </View>
     </View>


     <Image source={require('../../assets/img/arrow.png')} style={{ width: '50%', height: '42%', marginBottom: 50}} />


   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ZFOURTH;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import MailSvg from '../../assets/svg/MailSvg.tsx';
import ShieldSvg from '../../assets/svg/ShieldSvg.tsx';

const ZFOURTH = () => {
  const handlePrivacyPress = () => {
    Linking.openURL('https://www.termsfeed.com/live/2e8a2b92-a805-46e5-b872-d5debc1274f3');
  };

  const handleTermsPress = () => {
    Linking.openURL('https://www.termsfeed.com/live/2e8a2b92-a805-46e5-b872-d5debc1274f3'); // замените ссылкой на terms
  };
  return (
   <View style={{flex: 1, backgroundColor: '#000',  alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between'}}>

     <View>
       {/*<View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20}}>*/}
       {/*  /!*<View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>*!/*/}
       {/*  /!*  <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>*!/*/}
       {/*  /!*    Developer Website*!/*/}
       {/*  /!*  </Text>*!/*/}
       {/*  /!*  <WebSvg/>*!/*/}
       {/*  /!*</View>*!/*/}
       {/*  <View style={{backgroundColor: '#252525', width: '45%',alignItems: 'center',flexDirection: 'column', padding: 16, borderRadius: 24}}>*/}
       {/*    <Text style={{color: '#fff', fontSize: 16, marginBottom: 12}}>*/}
       {/*      Terms of use*/}
       {/*    </Text>*/}
       {/*    <MailSvg/>*/}
       {/*  </View>*/}
       {/*</View>*/}
       <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20}}>
         <TouchableOpacity onPress={handlePrivacyPress} style={{ backgroundColor: '#252525', width: '45%', alignItems: 'center', flexDirection: 'column', padding: 16, borderRadius: 24 }}>
           <Text style={{ color: '#fff', fontSize: 16, marginBottom: 12 }}>
             Privacy Policy
           </Text>
           <ShieldSvg />
         </TouchableOpacity>
         <TouchableOpacity onPress={handleTermsPress} style={{ backgroundColor: '#252525', width: '45%', alignItems: 'center', flexDirection: 'column', padding: 16, borderRadius: 24 }}>
           <Text style={{ color: '#fff', fontSize: 16, marginBottom: 12 }}>
             Terms of Use
           </Text>
           <MailSvg />
         </TouchableOpacity>
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

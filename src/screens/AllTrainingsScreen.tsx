import React from "react";
import {ScrollView, View, Text, Image} from 'react-native';
import { useSelector } from "react-redux";
import InfoComponent from '../components/InfoComponent.tsx';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import { SCREENS } from '../utils/constants';

const AllTrainingsScreen = ({ route, navigation }) => {
  const { type } = route.params;
  const allTrainings = useSelector(state => state.workouts?.workouts);

  const filteredTrainings = allTrainings?.filter(workout => workout.type === type);
  console.log(filteredTrainings);
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#000", paddingVertical: 40, paddingHorizontal: 16 }}>

        {filteredTrainings?.length > 0 ? (
          filteredTrainings.map(workout => (
            <InfoComponent key={workout.id} data={workout} />
          ))
        ) : (
          <>
            <Image source={require('../assets/img/ph_empty-bold.png')} style={{ width: 200, height: 200, marginBottom: 20, alignSelf: 'center' }} />
            <Text style={{ color: "#fff", textAlign: "center", marginTop: 0, fontSize: 24 }}>
              There aren’t any trainings yet, please add something
            </Text>
          </>
        )}

        <View style={{marginBottom: 150}}/>
      </ScrollView>

      <View style={{ width: '100%', height: 130, backgroundColor: '#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30 }}>
        <CustomSpesBtn title='Add new training' onPress={() => { navigation.navigate(SCREENS.CreateTrainingScreen, { type }) }} />
      </View>
    </View>
  );
};

export default AllTrainingsScreen;

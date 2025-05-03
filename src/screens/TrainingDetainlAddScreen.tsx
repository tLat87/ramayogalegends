import { View, Text, TouchableOpacity } from 'react-native';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import { SCREENS } from '../utils/constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../redux/slices/workoutsSlice';

const TrainingDetainlAddScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { type, trainingName, trainingSpentTime, trainingDate, trainingTime } = route.params;
  const [progress, setProgress] = useState('');
  const [before, setBefore] = useState('');
  const [after, setAfter] = useState('');

  const handleSaveWorkout = () => {
    if (!isFormValid) return;

    const newWorkout = {
      id: Date.now(),
      type,
      name: trainingName,
      timeSpent: trainingSpentTime,
      date: trainingDate,
      time: trainingTime,
      wellBeingBefore: before,
      wellBeingAfter: after,
      progress,
    };

    dispatch(addWorkout(newWorkout));
    navigation.navigate(SCREENS.TrainingAddedSCreen);
  };

  const wellBeingOptions = ['Bad', 'Good', 'Great', 'Excellent'];

  // Проверка, заполнены ли все поля
  const isFormValid = before && after && progress;

  return (
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 16 }}>
      <Text style={{ color: '#fff', fontSize: 16, marginLeft: 24, marginBottom: 8 }}>
        Well-being before
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginLeft: 24 }}>
        {wellBeingOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={{
              backgroundColor: before === option ? '#FFDC00' : '#1C1C1C',
              padding: 12,
              borderRadius: 12,
            }}
            onPress={() => setBefore(option)}
          >
            <Text style={{ color: '#fff' }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ color: '#fff', fontSize: 16, marginLeft: 24, marginBottom: 8, marginTop: 24 }}>
        Well-being after
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginLeft: 24 }}>
        {wellBeingOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={{
              backgroundColor: after === option ? '#FFDC00' : '#1C1C1C',
              padding: 12,
              borderRadius: 12,
            }}
            onPress={() => setAfter(option)}
          >
            <Text style={{ color: '#fff' }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ color: '#fff', fontSize: 16, marginLeft: 24, marginTop: 24 }}>
        Progress in
      </Text>
      <View style={{ marginTop: 8, width: '90%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: '#252525', alignSelf: 'center', borderRadius: 99 }}>
        <TouchableOpacity
          style={[{ backgroundColor: 'transparent', padding: 12, borderRadius: 99, width: '33%', alignItems: 'center' }, progress === 'Flexibility' && { backgroundColor: '#FF3A3B' }]}
          onPress={() => setProgress('Flexibility')}
        >
          <Text style={{ color: '#fff' }}>Flexibility</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: 'transparent', padding: 12, borderRadius: 99, width: '33%', alignItems: 'center' }, progress === 'Endurance' && { backgroundColor: '#FF3A3B' }]}
          onPress={() => setProgress('Endurance')}
        >
          <Text style={{ color: '#fff' }}>Endurance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: 'transparent', padding: 12, borderRadius: 99, width: '33%', alignItems: 'center' }, progress === 'Concentration' && { backgroundColor: '#FF3A3B' }]}
          onPress={() => setProgress('Concentration')}
        >
          <Text style={{ color: '#fff' }}>Concentration</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: '100%', height: 130, backgroundColor: '#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30 }}>
        <CustomSpesBtn
          title='Next'
          onPress={handleSaveWorkout}
          disabled={!isFormValid}
          style={{ opacity: isFormValid ? 1 : 0.5 }}
        />
      </View>
    </View>
  );
}

export default TrainingDetainlAddScreen;

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CustomSpesBtn from "../components/CustomSpesBtn.tsx";
import { SCREENS } from "../utils/constants";
import React, { useState } from "react";
import CalendarSvg from "../assets/svg/CalendarSvg.tsx";
import TimeSvg from "../assets/svg/TimeSvg.tsx";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateTrainingScreen = ({ navigation, route }) => {
  const [trainingName, setTrainingName] = useState("");
  const [trainingSpentTime, setTrainingSpentTime] = useState("");
  const { type } = route.params;

  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setTrainingDate(formattedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const formattedTime = selectedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTrainingTime(formattedTime);
    }
  };

  // Проверяем, все ли поля заполнены
  const isFormValid =
    trainingName.trim() !== "" &&
    trainingSpentTime.trim() !== "" &&
    trainingDate.trim() !== "" &&
    trainingTime.trim() !== "";

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: 16 }}>
      <Text style={{ color: "#fff", fontSize: 16, marginLeft: 24 }}>
        Name of training
      </Text>

      <TextInput
        value={trainingName}
        onChangeText={setTrainingName}
        placeholder="Task name"
        placeholderTextColor="#555"
        style={{
          width: "90%",
          marginTop: 16,
          marginHorizontal: 24,
          height: 50,
          backgroundColor: "#1C1C1C",
          borderRadius: 92,
          color: "#fff",
          paddingHorizontal: 16,
          fontSize: 16,
        }}
      />

      {/* Выбор даты */}
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={{
          width: "90%",
          marginLeft: 24,
          height: 50,
          borderRadius: 92,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1C1C1C",
          marginTop: 16,
        }}
      >
        <CalendarSvg />
        <Text style={{ fontSize: 16, marginLeft: 4, color: "gray" }}>
          {trainingDate ? trainingDate : "Choose date"}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          style={{backgroundColor: '#FFDC00', borderRadius: 92, marginLeft: '33%', marginTop: 8}}
          onChange={onChangeDate}
        />
      )}

      {/* Выбор времени */}
      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        style={{
          width: "90%",
          marginLeft: 24,
          height: 50,
          borderRadius: 92,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1C1C1C",
          marginTop: 16,
        }}
      >
        <TimeSvg />
        <Text style={{ fontSize: 16, marginLeft: 4, color: "gray" }}>
          {trainingTime ? trainingTime : "Choose time"}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          style={{backgroundColor: '#FFDC00', borderRadius: 92, marginLeft: '33%', marginTop: 8}}
          display="default"
          onChange={onChangeTime}
        />
      )}

      <Text
        style={{ color: "#fff", fontSize: 16, marginLeft: 24, marginTop: 24 }}
      >
        Time spent
      </Text>

      <TextInput
        value={trainingSpentTime}
        onChangeText={setTrainingSpentTime}
        placeholder="Example: 2h 30m"
        placeholderTextColor="#555"
        style={{
          width: "90%",
          marginTop: 16,
          marginHorizontal: 24,
          height: 50,
          backgroundColor: "#1C1C1C",
          borderRadius: 92,
          color: "#fff",
          paddingHorizontal: 16,
          fontSize: 16,
        }}
      />

      <View
        style={{
          width: "100%",
          height: 130,
          backgroundColor: "#1C1C1C",
          position: "absolute",
          bottom: 0,
          paddingTop: 30,
        }}
      >
        <CustomSpesBtn
          title="Next"
          onPress={() => {
            if (isFormValid) {
              navigation.navigate(SCREENS.TrainingDetainlAddScreen, {
                type,
                trainingName,
                trainingSpentTime,
                trainingDate,
                trainingTime,
              });
            }
          }}
          disabled={!isFormValid}
          style={{
            opacity: isFormValid ? 1 : 0.5,
          }}
        />
      </View>
    </View>
  );
};

export default CreateTrainingScreen;

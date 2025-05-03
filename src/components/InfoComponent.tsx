import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import { useDispatch } from "react-redux";
import { removeWorkout } from "../redux/slices/workoutsSlice";
import ThreeDotsSvg from "../assets/svg/ThreeDotsSvg.tsx";
import DownYellow from "../assets/svg/DownYellow.tsx";

const InfoComponent = ({ data }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    dispatch(removeWorkout(data.id));
    setModalVisible(false);
  };

  return (
    <View
      style={{
        width: "100%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#1C1C1C",
        borderRadius: 24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Верхняя часть */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 6,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
          {data.name}
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <ThreeDotsSvg />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "bold",
          color: "#fff",
          alignSelf: "flex-start",
        }}
      >
        {data.date} - {data.time}
      </Text>
      <View
        style={{
          width: "100%",
          height: 2,
          backgroundColor: "#252525",
          marginVertical: 12,
        }}
      />

      {/* Кнопка "Additional information" */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginBottom: 6,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
          Additional information
        </Text>
        <DownYellow
          style={{ transform: [{ rotate: isExpanded ? "180deg" : "0deg" }] }}
        />
      </TouchableOpacity>

      {/* Дополнительная информация */}
      {isExpanded && (
        <View style={{ marginTop: 8 }}>
          {[
            { label: "Time", value: data.timeSpent },
            { label: "Well-being before", value: data.wellBeingBefore },
            { label: "Well-being after", value: data.wellBeingAfter },
            { label: "Progress", value: data.progress },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                marginBottom: 6,
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 14, color: "#fff" }}>{item.label}</Text>
              <Text style={{ fontSize: 14, color: "#fff" }}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}

      {/* === МОДАЛЬНОЕ ОКНО === */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#1C1C1C",
              padding: 20,
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            {/* Кнопка закрытия сверху справа */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                position: "absolute",
                right: 16,
                top: 16,
              }}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>✕</Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                marginBottom: 20,
                fontWeight: "bold",
              }}
            >
              What you want to do?
            </Text>

            {/*<TouchableOpacity*/}
            {/*  style={{*/}
            {/*    width: "100%",*/}
            {/*    padding: 12,*/}
            {/*    borderRadius: 10,*/}
            {/*    backgroundColor: "#FFDC00",*/}
            {/*    alignItems: "center",*/}
            {/*    marginBottom: 10,*/}
            {/*  }}*/}
            {/*  onPress={() => {*/}
            {/*    console.log("Edit action");*/}
            {/*    setModalVisible(false);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>*/}
            {/*    Edit*/}
            {/*  </Text>*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                backgroundColor: "#FA3909",
                alignItems: "center",
              }}
              onPress={handleDelete}
            >
              <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InfoComponent;

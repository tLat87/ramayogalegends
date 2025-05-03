// import React, { useRef, useState } from "react";
// import {
//   View,
//   Image,
//   ImageBackground,
//   Animated,
//   PanResponder,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from "react-native";
// import {SCREENS} from '../utils/constants';
//
// const { width, height } = Dimensions.get("window");
//
// const targetImages = {
//   1: require("../assets/img/3d1.png"),
//   2: require("../assets/img/3d2.png"),
//   3: require("../assets/img/3d3.png"),
//   4: require("../assets/img/3d4.png"),
// };
//
// const GameScreen = ({ navigation, route }) => {
//   const {level} = route.params;
//   const rotation = useRef(new Animated.Value(0)).current;
//   const arrowPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
//   const [arrowVisible, setArrowVisible] = useState(false);
//   const bowRotation = useRef(0);
//
//   const [targets, setTargets] = useState([
//     { id: 1, top: 90, left: 20, width: 80, height: 80, visible: true, angleRange: [-40, -20] },
//     // { id: 2, top: 20, right: 70, width: 80, height: 80, visible: true, angleRange: [10, 18] },
//     // { id: 3, top: 200, right: 10, width: 80, height: 80, visible: true, angleRange: [30, 40] },
//     // { id: 4, top: 320, left: 10, width: 80, height: 80, visible: true, angleRange: [-55, -40] },
//   ]);
//
//   const panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (_, gesture) => {
//       let angle = Math.max(-90, Math.min(90, gesture.dx / 2));
//       rotation.setValue(angle);
//       bowRotation.current = angle;
//     },
//   });
//
//   const shootArrow = () => {
//     setArrowVisible(true);
//     let angleRad = (bowRotation.current * Math.PI) / 180;
//     let velocityX = Math.sin(angleRad) * width;
//     let velocityY = -Math.cos(angleRad) * height;
//
//     Animated.timing(arrowPosition, {
//       toValue: { x: velocityX, y: velocityY },
//       duration: 1000,
//       useNativeDriver: true,
//     }).start(() => {
//       setArrowVisible(false);
//       arrowPosition.setValue({ x: 0, y: 0 });
//
//       setTimeout(() => {
//         checkHit();
//       }, 1000);
//     });
//   };
//
//   const checkHit = () => {
//     let angle = bowRotation.current;
//     let updatedTargets = targets.map(target => {
//       if (target.visible && angle >= target.angleRange[0] && angle <= target.angleRange[1]) {
//         return { ...target, visible: false };
//       }
//       return target;
//     });
//
//     setTargets(updatedTargets);
//
//     if (updatedTargets.every(target => !target.visible)) {
//       navigation.navigate(SCREENS.UWinScreen);
//     }
//   };
//
//   return (
//     <ImageBackground
//       source={{uri: "https://s3-alpha-sig.figma.com/img/1b4e/f65e/12a48727cfe5ef58851bde3a7c36ec18?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DjG5v5zdAxcWN2FL8U2FpKSlV7Owa9ll~C6rfT4pww-VJzKIwP6dyf8U0UhmlXu-DtKhgbt8vq3AyRP7cwh7mLuyq1KFFbNvMabDOYzcle1GTEIY7bf55IKnUOrLCT3LJpJRn7Gs05L9Ei9zZUOLwEkoQLLDyXC8Ig38Rz~-pTGRtCHa7-Jo7HQSUxBDX4DClbUJWjpJAjW2UPdHn4sbPdkim63KPKqHPJ1A7j5bSGq0tY~fnV5eS4Hh3VKTgCM7QfVlek7EbnbofzS5exNqmarQdoLO-cljx0dg7nM3O21KDAKG9ZlNg0iL1aU9XrO~iu2yQhRE1pcGsU38n7ylCg__" }}
//       style={{ flex: 1 }}
//       imageStyle={{ opacity: 1 }}
//     >
//       {targets.map(target =>
//           target.visible && (
//             <Image
//               key={target.id}
//               source={targetImages[target.id]}
//               style={{ position: 'absolute', top: target.top, left: target.left || undefined, right: target.right || undefined, width: target.width, height: target.height }}
//             />
//           )
//       )}
//
//       <Animated.View
//         style={{
//           transform: [
//             { rotate: rotation.interpolate({ inputRange: [-90, 90], outputRange: ["-90deg", "90deg"] }) },
//           ],
//           position: "absolute",
//           bottom: 50,
//           alignSelf: "center",
//         }}
//         {...panResponder.panHandlers}
//       >
//         <Image source={require("../assets/img/FigJa.png")} style={{ width: 400, height: 200 }} />
//       </Animated.View>
//
//       {arrowVisible && (
//         <Animated.View
//           style={{
//             position: "absolute",
//             bottom: 80,
//             left: width / 2,
//             transform: [
//               { translateX: arrowPosition.x },
//               { translateY: arrowPosition.y },
//             ],
//           }}
//         >
//           <Image source={require("../assets/img/arrow.png")} style={{ width: 50, height: 50 }} />
//         </Animated.View>
//       )}
//
//       <TouchableOpacity onPress={shootArrow} style={styles.shootButton}>
//         <Text style={styles.shootText}>Shoot</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };
//
// const styles = StyleSheet.create({
//   shootButton: {
//     position: "absolute",
//     bottom: 20,
//     alignSelf: "center",
//     backgroundColor: "#FFDC00",
//     padding: 10,
//     borderRadius: 10,
//   },
//   shootText: {
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });
//
// export default GameScreen;
//
//

import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Image,
  ImageBackground,
  Animated,
  PanResponder,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SCREENS } from "../utils/constants";

const { width, height } = Dimensions.get("window");

const targetImages = {
  1: require("../assets/img/3d1.png"),
  2: require("../assets/img/3d2.png"),
  3: require("../assets/img/3d3.png"),
  4: require("../assets/img/3d4.png"),
};

const GameScreen = ({ navigation, route }) => {
  const { level } = route.params;

  // Устанавливаем время в зависимости от сложности
  const initialTime = level === "easy" ? 30 : level === "medium" ? 20 : 10;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const rotation = useRef(new Animated.Value(0)).current;
  const arrowPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [arrowVisible, setArrowVisible] = useState(false);
  const bowRotation = useRef(0);

  const [targets, setTargets] = useState([
    { id: 1, top: 90, left: 20, width: 80, height: 80, visible: true, angleRange: [-40, -20] },
    { id: 2, top: 20, right: 70, width: 80, height: 80, visible: true, angleRange: [10, 18] },
    { id: 3, top: 200, right: 10, width: 80, height: 80, visible: true, angleRange: [30, 40] },
    { id: 4, top: 320, left: 10, width: 80, height: 80, visible: true, angleRange: [-55, -40] },
  ]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigation.navigate(SCREENS.TimeEndScreen)
    }
  }, [timeLeft]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      let angle = Math.max(-90, Math.min(90, gesture.dx / 2));
      rotation.setValue(angle);
      bowRotation.current = angle;
    },
  });

  const shootArrow = () => {

    setArrowVisible(true);
    let angleRad = (bowRotation.current * Math.PI) / 180;
    let velocityX = Math.sin(angleRad) * width;
    let velocityY = -Math.cos(angleRad) * height;

    Animated.timing(arrowPosition, {
      toValue: { x: velocityX, y: velocityY },
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setArrowVisible(false);
      arrowPosition.setValue({ x: 0, y: 0 });

      setTimeout(() => {
        checkHit();
      }, 1000);
    });
  };

  const checkHit = () => {
    let angle = bowRotation.current;
    let updatedTargets = targets.map(target => {
      if (target.visible && angle >= target.angleRange[0] && angle <= target.angleRange[1]) {
        return { ...target, visible: false };
      }
      return target;
    });

    setTargets(updatedTargets);

    if (updatedTargets.every(target => !target.visible)) {
      navigation.navigate(SCREENS.UWinScreen);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/img/back/1b4ef65e12a48727cfe5ef58851bde3a7c36ec18.png')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 1 }}
    >
      {/* Отображаем оставшееся время */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{timeLeft}s</Text>
      </View>

      {targets.map(target =>
          target.visible && (
            <Image
              key={target.id}
              source={targetImages[target.id]}
              style={{ position: "absolute", top: target.top, left: target.left || undefined, right: target.right || undefined, width: target.width, height: target.height }}
            />
          )
      )}

      <Animated.View
        style={{
          transform: [{ rotate: rotation.interpolate({ inputRange: [-90, 90], outputRange: ["-90deg", "90deg"] }) }],
          position: "absolute",
          bottom: 50,
          alignSelf: "center",
        }}
        {...panResponder.panHandlers}
      >
        <Image source={require("../assets/img/FigJa.png")} style={{ width: 400, height: 200 }} />
      </Animated.View>

      {arrowVisible && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 80,
            left: width / 2,
            transform: [
              { translateX: arrowPosition.x },
              { translateY: arrowPosition.y },
            ],
          }}
        >
          <Image source={require("../assets/img/arrow.png")} style={{ width: 50, height: 50 }} />
        </Animated.View>
      )}

      <TouchableOpacity onPress={shootArrow} style={styles.shootButton}>
        <Text style={styles.shootText}>Shoot</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    position: "absolute",
    top: 40,
    left: "50%",
    transform: [{ translateX: -25 }],
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  timerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  shootButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#FFDC00",
    padding: 10,
    borderRadius: 10,
  },
  shootText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default GameScreen;


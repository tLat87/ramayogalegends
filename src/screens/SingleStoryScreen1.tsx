import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import BottomHomeSvg from '../assets/svg/BottomHomeSvg.tsx';
import YellowArrowSvg from '../assets/svg/YellowArrowSvg.tsx';

const storyData = [
  {
    title: "Exile of Rama",
    text: "In this episode, Rama, the son of King Dasharatha, receives the news of his exile to the forest for 14 years. The king, succumbing to the manipulations of his wife Kaikeyi, is forced to send his beloved son into exile. Rama accepts this with nobility, understanding that duty is more important than personal desires. His wife Sita, full of determination, decides to follow him into the forest despite the dangers. Rama's brother Lakshmana also chooses to accompany them, demonstrating the strength of family bonds and loyalty. This moment becomes pivotal in their destinies and sets the tone for the entire story.",
    background: require('../assets/img/1/e3aca12fdc494af4d0ab3ff95847962a9c931e28.png')
  },
  {
    title: "Abduction of Sita",
    text: "This episode depicts the moment when the demon Ravana abducts Sita through trickery. Left alone in the forest, Sita is tempted when Ravana, taking the form of a handsome Brahmin, deceitfully lures her. Unaware of his true nature, she falls into his trap. The abduction of Sita becomes a key event that prompts Rama to begin searching for his wife. This episode symbolizes the struggle between good and evil and establishes the foundation for all subsequent events.",
      background: require('../assets/img/1/5ee20661acca76d62aec43de478c448c71abcc16.png')
  },
  {
    title: "Friendship with Hanuman",
    text: "In this episode, the meeting between Rama and Hanuman occurs, who becomes his loyal friend and assistant. Hanuman, devoted to the deity Vayu, displays incredible strength and loyalty. He offers his help in finding Sita and becomes a symbol of fidelity and strength. Their friendship plays a key role in the upcoming battle against Ravana. Hanuman not only helps locate Sita but also inspires Rama and his army to fight for justice.",
      background: require('../assets/img/1/152c3a350550a505c6ae5c9a45ccb0781f421b38.png')
  },
  {
    title: "Battle with Ravana",
    text: "This episode illustrates the epic battle between Rama's army and Ravana's forces. The battle rages with incredible intensity: arrows fly, warriors clash, and Ravana's throne is visible in the background. Rama uses his archery skills while the monkey army supports him in fighting the demon. \n" +
      "\n" +
      "This battle symbolizes the struggle between good and evil and culminates in Rama's victory. The epic confrontation becomes the climax of the narrative and emphasizes the importance of loyalty and courage.",
      background: require('../assets/img/1/75982d989df57efd8ca994772b186e450558d8ff.png')
  },
  {
    title: "Return to Ayodhya",
    text: "This episode depicts Rama's triumphant return to his hometown Ayodhya after a long exile. The townspeople greet him with joy: the streets are adorned with flowers and flags. After defeating Ravana,\n" +
      "\n" +
      "Rama returns home with Sita and Lakshmana. This return symbolizes the restoration of justice and order in the kingdom. The celebration of their return becomes the basis for the festival of Diwali, which marks the victory of light over darkness.",
      background: require('../assets/img/1/a485220d7fab609748e81afdd46688afb60fb0cc.png')
  },
  {
    title: "Trial of Sita",
    text: "In this episode, Sita's trial of fidelity is depicted when she walks through fire. This moment is filled with drama: Sita shows resilience and determination in the face of doubt. The trial by fire symbolizes her loyalty and strength of spirit. \n" +
      "\n" +
      "Despite all obstacles, Rama accepts her back, affirming the power of their love and trust. This episode highlights the importance of fidelity and devotion in relationships.",
      background: require('../assets/img/1/d5bec5f99d86860ebab8ca6ebd9a58239422f9ef.png')
  }
];

const StoryScreen1 = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % storyData.length);
  };

  const prevPage = () => {
    setPageIndex((prevIndex) => (prevIndex - 1) % storyData.length);
  };

  return (
    <ImageBackground
      source={storyData[pageIndex].background}
      style={{flex: 1}}
      imageStyle={{opacity: 1}}>
      <Text
        style={{
          marginTop: 80,
          color: '#fff',
          marginLeft: 24,
          fontWeight: 'bold',
          fontSize: 24,
        }}>
        {storyData[pageIndex].title}
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 16,
          marginHorizontal: 24,
          marginTop: 14,
        }}>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 16,
          }}
          blurType="extraDark"
          blurAmount={5}
        />
        <Text style={{color: '#fff', fontSize: 16}}>
          {storyData[pageIndex].text}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 130,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#1C1C1C',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 20,
          }}>
          {pageIndex !== 0 &&
            <TouchableOpacity
              onPress={prevPage}
              style={{transform: [{scaleX: -1}]}}>
              <YellowArrowSvg />
            </TouchableOpacity>
          }

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BottomHomeSvg />
          </TouchableOpacity>

          {pageIndex !== storyData.length-1 &&
            <TouchableOpacity onPress={nextPage}>
              <YellowArrowSvg />
            </TouchableOpacity>
          }
        </View>
      </View>
    </ImageBackground>
  );
};

export default StoryScreen1;

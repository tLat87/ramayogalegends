import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import BottomHomeSvg from '../assets/svg/BottomHomeSvg.tsx';
import YellowArrowSvg from '../assets/svg/YellowArrowSvg.tsx';

const storyData = [
  {
    title: "The Concept of Dharma in the Ramayana",
    text: "The Ramayana intricately weaves the concept of dharma, or righteousness, into its narrative, illustrating how characters navigate their moral obligations. Dharma is portrayed as a guiding principle that dictates one's duties towards family, society, and the cosmos. Rama embodies ideal dharma, adhering to his father's wishes despite personal sacrifice, while Sita exemplifies loyalty and virtue even in the face of adversity. The epic emphasizes that dharma is not a rigid set of rules but a dynamic force that requires discernment and adaptability. Through the trials faced by Rama, Sita, and Lakshmana, the Ramayana teaches that upholding dharma may involve difficult choices, ultimately leading to spiritual growth and harmony in the universe.",
    background: require('../assets/img/3/cc082724070dc29ca75dba6f85095ed71bd5146a.png')
  },
  {
    title: "The Role of Devotion in the Ramayana",
    text: "Devotion, or bhakti, is a central theme in the Ramayana, epitomized by Hanuman's unwavering loyalty to Rama. His character illustrates the transformative power of devotion, showcasing how love for the divine can inspire extraordinary acts of courage and selflessness. The relationship between Rama and Hanuman serves as a model for devotees, emphasizing that true devotion transcends mere worship; it manifests in action and service. Sita's steadfast love for Rama also highlights the profound connection between devotion and resilience. The Ramayana teaches that through sincere devotion, individuals can overcome challenges and realize their higher selves, ultimately contributing to the restoration of dharma in the world.",
      background: require('../assets/img/3/378e211b46453444680799a3c1d7a07ea3b86db4.png')
  },
];

const StoryScreen3 = ({ navigation }) => {
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

export default StoryScreen3;
